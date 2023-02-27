import { NonEmptyBase, WithElem } from '@rimbu/collection-types/set-custom';
import { ArrayNonEmpty, RelatedTo, ToJSON, TraverseState } from '@rimbu/common';
import type { List } from '@rimbu/list';
import type { OrderedSet } from '@rimbu/ordered';
import type {
  OrderedSetBase,
  OrderedSetTypes,
} from '@rimbu/ordered/set-custom';
import { Stream, StreamSource } from '@rimbu/stream';
import { isEmptyStreamSourceInstance } from '@rimbu/stream/custom';

export class OrderedSetNonEmpty<
    T,
    Tp extends OrderedSetTypes,
    TpG extends WithElem<Tp, T> = WithElem<Tp, T>
  >
  extends NonEmptyBase<T>
  implements OrderedSetBase.NonEmpty<T, Tp>
{
  constructor(
    readonly context: WithElem<Tp, T>['context'],
    readonly order: List.NonEmpty<T>,
    readonly sourceSet: TpG['sourceSetNonEmpty']
  ) {
    super();
  }

  get size(): number {
    return this.order.length;
  }

  asNormal(): any {
    return this;
  }

  assumeNonEmpty(): any {
    return this;
  }

  copy(order = this.order, sourceSet = this.sourceSet): TpG['nonEmpty'] {
    return this.context.createNonEmpty<T>(order, sourceSet as any);
  }

  stream(): Stream.NonEmpty<T> {
    return this.order.stream();
  }

  has<U>(value: RelatedTo<T, U>): boolean {
    return this.sourceSet.has(value);
  }

  add(value: T): TpG['nonEmpty'] {
    if (this.sourceSet.has(value)) return this as any;
    return this.copy(this.order.append(value), this.sourceSet.add(value));
  }

  addAll(values: StreamSource<T>): TpG['nonEmpty'] {
    if (isEmptyStreamSourceInstance(values)) return this as any;

    const builder = this.toBuilder();
    builder.addAll(values);
    return builder.build().assumeNonEmpty();
  }

  remove<U>(value: RelatedTo<T, U>): TpG['normal'] {
    if (!this.context.setContext.isValidValue(value)) return this as any;

    const newSet = this.sourceSet.remove(value);

    if (newSet === this.sourceSet) return this as any;

    if (newSet.nonEmpty()) {
      const index = this.order.stream().indexOf(value as T)!;
      return this.copy(
        this.order.remove(index).assumeNonEmpty(),
        newSet
      ) as any;
    }

    return this.context.empty();
  }

  removeAll<U>(values: StreamSource<RelatedTo<T, U>>): TpG['normal'] {
    if (isEmptyStreamSourceInstance(values)) return this as any;

    const builder = this.toBuilder();
    builder.removeAll(values);
    return builder.build();
  }

  forEach(
    f: (value: T, index: number, halt: () => void) => void,
    state: TraverseState = TraverseState()
  ): void {
    if (state.halted) return;

    this.order.forEach(f, state);
  }

  filter(
    pred: (value: T, index: number, halt: () => void) => boolean
  ): TpG['normal'] {
    const builder = this.context.builder<T>();

    builder.addAll(this.stream().filter(pred));

    if (builder.size === this.size) return this as any;

    return builder.build();
  }

  union(other: StreamSource<T>): TpG['nonEmpty'] {
    if (other === this) return this as any;
    if (isEmptyStreamSourceInstance(other)) return this as any;

    const builder = this.toBuilder();
    builder.addAll(other);
    return builder.build().assumeNonEmpty();
  }

  difference(other: StreamSource<T>): TpG['normal'] {
    if (other === this) return this.context.empty();
    if (isEmptyStreamSourceInstance(other)) return this as any;

    const builder = this.toBuilder();
    builder.removeAll(other);
    return builder.build();
  }

  intersect(other: StreamSource<T>): TpG['normal'] {
    if (other === this) return this as any;
    if (isEmptyStreamSourceInstance(other)) return this.context.empty();

    const builder = this.context.builder<T>();
    const otherIter = Stream.from(other)[Symbol.iterator]();

    const done = Symbol('Done');
    let value: T | typeof done;

    while (done !== (value = otherIter.fastNext(done))) {
      if (this.has(value)) builder.add(value);
    }

    if (builder.size === this.size) return this as any;

    return builder.build();
  }

  symDifference(other: StreamSource<T>): TpG['normal'] {
    if (other === this) return this.context.empty();

    if (isEmptyStreamSourceInstance(other)) return this as any;

    const builder = this.toBuilder();

    Stream.from(other).filterNotPure(builder.remove).forEach(builder.add);

    return builder.build();
  }

  toArray(): ArrayNonEmpty<T> {
    return this.order.toArray();
  }

  toBuilder(): TpG['builder'] {
    return this.context.createBuilder(this);
  }

  toString(): string {
    return this.stream().join({ start: 'OrderedSet(', sep: ', ', end: ')' });
  }

  toJSON(): ToJSON<
    T[],
    this['context']['typeTag'],
    { context: OrderedSet.Context.Serialized }
  > {
    return {
      dataType: this.context.typeTag,
      value: this.sourceSet.toJSON().value,
      attributes: {
        context: this.context.toJSON(),
      },
    };
  }
}
