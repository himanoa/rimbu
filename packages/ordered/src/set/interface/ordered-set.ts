import type { RSet } from '@rimbu/collection-types/set';
import type { List } from '@rimbu/list';
import {
  OrderedSetBase,
  OrderedSetContextImpl,
  type OrderedSetCreators,
} from '@rimbu/ordered/set-custom';
import type { Stream, Streamable } from '@rimbu/stream';

/**
 * A type-invariant immutable Ordered Set of value type T.
 * In the Set, there are no duplicate values.
 * See the [Set documentation](https://rimbu.org/docs/collections/set) and the [OrderedSet API documentation](https://rimbu.org/api/rimbu/ordered/set/OrderedSet/interface)
 * @typeparam T - the value type
 * @note
 * - The OrderedSet keeps the insertion order of values, thus
 * iterators and stream will also reflect this order.
 * - The OrderedSet wraps around an RSet instance, thus has the same time complexity
 * as the source set.
 * - The OrderedSet keeps the key insertion order in a List, thus its space
 * complexity is higher than the source set.
 * @example
 * ```ts
 * const s1 = OrderedSortedSet.empty<string>()
 * const s2 = OrderedSortedSet.of('a', 'b', 'c')
 * ```
 */
export interface OrderedSet<T> extends OrderedSetBase<T, OrderedSet.Types> {}

export namespace OrderedSet {
  /**
   * A non-empty type-invariant immutable Ordered SortedSet of value type T.
   * In the Set, there are no duplicate values.
   * See the [Set documentation](https://rimbu.org/docs/collections/set) and the [OrderedSet API documentation](https://rimbu.org/api/rimbu/ordered/set/OrderedSet/interface)
   * @typeparam T - the value type
   * @note
   * - The OrderedSet keeps the insertion order of values, thus
   * iterators and stream will also reflect this order.
   * - The OrderedSet wraps around an RSet instance, thus has the same time complexity
   * as the source set.
   * - The OrderedSet keeps the key insertion order in a List, thus its space
   * complexity is higher than the source set.
   * @example
   * ```ts
   * const s1 = OrderedSortedSet.empty<string>()
   * const s2 = OrderedSortedSet.of('a', 'b', 'c')
   * ```
   */
  export interface NonEmpty<T>
    extends OrderedSetBase.NonEmpty<T, OrderedSet.Types>,
      Omit<OrderedSet<T>, keyof OrderedSetBase.NonEmpty<any, any>>,
      Streamable.NonEmpty<T> {
    stream(): Stream.NonEmpty<T>;
  }

  /**
   * A mutable `OrderedSet` builder used to efficiently create new immutable instances.
   * See the [Set documentation](https://rimbu.org/docs/collections/set) and the [OrderedSet.Builder API documentation](https://rimbu.org/api/rimbu/ordered/set/OrderedSet/Builder/interface)
   * @typeparam T - the value type
   */
  export interface Builder<T>
    extends OrderedSetBase.Builder<T, OrderedSet.Types> {}

  export interface Context<UT>
    extends OrderedSetBase.Context<UT, OrderedSet.Types> {}

  export namespace Context {
    export interface Options<UT> {
      contextId?: string;
      listContext?: List.Context;
      setContext: RSet.Context<UT>;
    }

    export interface Serialized {
      typeTag: string;
      contextId: string;
      listContext: List.Context.Serialized;
      setContext: Record<string, any>;
    }
  }

  /**
   * Utility interface that provides higher-kinded types for this collection.
   */
  export interface Types extends OrderedSetBase.Types {
    readonly normal: OrderedSet<this['_T']>;
    readonly nonEmpty: OrderedSet.NonEmpty<this['_T']>;
    readonly context: OrderedSet.Context<this['_T']>;
    readonly builder: OrderedSet.Builder<this['_T']>;
    readonly sourceContext: RSet.Context<this['_T']>;
    readonly sourceSet: RSet<this['_T']>;
    readonly sourceSetNonEmpty: RSet.NonEmpty<this['_T']>;
  }
}

export const OrderedSet: OrderedSetCreators = Object.freeze({
  createContext<UT>(
    options: OrderedSet.Context.Options<UT>
  ): OrderedSet.Context<UT> {
    return Object.freeze(new OrderedSetContextImpl<UT>(options) as any);
  },
});
