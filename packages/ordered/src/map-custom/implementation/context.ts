import { RMapBase, WithKeyValue } from '@rimbu/collection-types/map-custom';
import { generateUUID } from '@rimbu/common';
import { List } from '@rimbu/list';
import type { OrderedMap } from '@rimbu/ordered';
import {
  OrderedMapBase,
  OrderedMapBuilder,
  OrderedMapEmpty,
  OrderedMapNonEmpty,
} from '@rimbu/ordered/map-custom';

export interface OrderedMapTypes extends OrderedMapBase.Types {
  readonly context: OrderedMapContextImpl<this['_K']>;
}

export class OrderedMapContextImpl<
    UK,
    Tp extends OrderedMapTypes = OrderedMapTypes
  >
  extends RMapBase.ContextBase<UK, Tp>
  implements OrderedMapBase.Context<UK, Tp>
{
  constructor(
    options: OrderedMap.Context.Options<UK>,
    readonly listContext = options.listContext ?? List.defaultContext(),
    readonly mapContext: WithKeyValue<
      Tp,
      UK,
      any
    >['sourceContext'] = options.mapContext as WithKeyValue<
      Tp,
      UK,
      any
    >['sourceContext'],
    readonly contextId = options.contextId ?? generateUUID()
  ) {
    super();
  }

  readonly typeTag = 'OrderedMap';
  readonly _empty: WithKeyValue<Tp, any, any>['normal'] = Object.freeze(
    new OrderedMapEmpty<any, any, Tp>(this as any) as any
  );

  isNonEmptyInstance(source: any): source is any {
    return source instanceof OrderedMapNonEmpty;
  }

  isValidKey(key: any): key is UK {
    return this.mapContext.isValidKey(key);
  }

  readonly builder = <K extends UK, V>(): WithKeyValue<Tp, K, V>['builder'] => {
    return new OrderedMapBuilder<K, V, Tp>(this as any) as any;
  };

  createBuilder<K extends UK, V>(source?: any): any {
    return new OrderedMapBuilder<K, V, Tp>(this as any, source as any) as any;
  }

  createNonEmpty<K extends UK, V>(
    order: List.NonEmpty<K>,
    sourceMap: any
  ): any {
    return new OrderedMapNonEmpty<K, V, Tp>(
      this as any,
      order,
      sourceMap
    ) as any;
  }

  toJSON(): OrderedMap.Context.Serialized {
    return {
      typeTag: this.typeTag,
      contextId: this.contextId,
      listContext: this.listContext.toJSON(),
      mapContext: this.mapContext.toJSON(),
    };
  }
}
