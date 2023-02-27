import type { RMap } from '@rimbu/collection-types';

import { Instances, Token } from '@rimbu/base';
import { OptLazy, OptLazyOr, RelatedTo, ToJSON } from '@rimbu/common';
import { Stream, StreamSource } from '@rimbu/stream';

import type {
  ValuedGraphBase,
  ValuedGraphTypesContextImpl,
} from '@rimbu/graph/custom';
import type { WithGraphValues } from '../../common';

import { GraphEmptyBase } from '../../common';

export class ValuedGraphEmpty<
    N,
    V,
    Tp extends ValuedGraphTypesContextImpl,
    TpG extends WithGraphValues<Tp, N, V> = WithGraphValues<Tp, N, V>
  >
  extends GraphEmptyBase
  implements ValuedGraphBase<N, V, Tp>
{
  constructor(readonly isDirected: boolean, readonly context: TpG['context']) {
    super();
  }

  get linkMap(): TpG['linkMap'] {
    return this.context.linkMapContext.empty();
  }

  getValue<UN, O>(
    node1: RelatedTo<N, UN>,
    node2: RelatedTo<N, UN>,
    otherwise?: OptLazy<O>
  ): O {
    return OptLazy(otherwise!);
  }

  getConnectionsFrom(): TpG['linkConnections'] {
    return this.context.linkConnectionsContext.empty<N, V>();
  }

  addNode(node: N): TpG['nonEmpty'] {
    return this.context.createNonEmpty(
      this.linkMap.context.of([
        node,
        this.context.linkConnectionsContext.empty(),
      ]),
      0
    );
  }

  addNodes(nodes: StreamSource<N>): WithGraphValues<Tp, N, V>['nonEmpty'] {
    const emptyConnections = this.context.linkConnectionsContext.empty<N, V>();

    const linkMap = this.context.linkMapContext.from(
      Stream.from(nodes).map((node) => [node, emptyConnections])
    );

    if (!linkMap.nonEmpty()) return this as any;
    return this.context.createNonEmpty(linkMap, 0) as TpG['nonEmpty'];
  }

  connect(node1: N, node2: N, value: V): TpG['nonEmpty'] {
    const linkMap = this.context.linkMapContext.of([
      node1,
      this.context.linkConnectionsContext.of([node2, value]) as RMap<N, V>,
    ]) as RMap.NonEmpty<N, RMap<N, V>>;

    if (node1 === node2) return this.context.createNonEmpty(linkMap, 1);

    const linkConnections = this.isDirected
      ? this.context.linkConnectionsContext.empty<N, V>()
      : this.context.linkConnectionsContext.of([node1, value]);

    return this.context.createNonEmpty(linkMap.set(node2, linkConnections), 1);
  }

  connectAll(
    links: StreamSource<WithGraphValues<Tp, N, V>['link']>
  ): WithGraphValues<Tp, N, V>['nonEmpty'] {
    return this.context.from(links);
  }

  modifyAt(
    node1: N,
    node2: N,
    options: {
      ifNew?: OptLazyOr<V, Token>;
      ifExists?: (value: V, remove: Token) => V | Token;
    }
  ): WithGraphValues<Tp, N, V>['normal'] {
    if (undefined === options.ifNew) return this as any;

    const newValue = OptLazyOr<V, Token>(options.ifNew, Token);

    if (Token === newValue) return this as any;

    return this.connect(node1, node2, newValue);
  }

  mapValues<V2>(): WithGraphValues<Tp, N, V2>['normal'] {
    return this as any;
  }

  toString(): string {
    return `${this.context.typeTag}()`;
  }

  toJSON(): ToJSON<
    any[],
    this['context']['typeTag'],
    { context: Record<string, any> }
  > {
    return {
      dataType: this.context.typeTag,
      value: [],
      attributes: {
        context: this.context.toJSON(),
      },
    };
  }

  toBuilder(): TpG['builder'] {
    return this.context.builder();
  }
}
