import type { CustomBase, RSet } from '../../../collection-types/mod.ts';
import { List } from '../../../list/mod.ts';
import type { Stream, Streamable } from '../../../stream/mod.ts';
import {
  OrderedSetBase,
  OrderedSetContextImpl,
  OrderedSetTypes,
} from '../../ordered-custom.ts';

export interface OrderedSet<T> extends OrderedSetBase<T, OrderedSet.Types> {}

export namespace OrderedSet {
  export interface NonEmpty<T>
    extends OrderedSetBase.NonEmpty<T, OrderedSet.Types>,
      Omit<OrderedSet<T>, keyof OrderedSetBase.NonEmpty<any, any>>,
      Streamable.NonEmpty<T> {
    stream(): Stream.NonEmpty<T>;
  }

  export interface Builder<T>
    extends OrderedSetBase.Builder<T, OrderedSet.Types> {}

  export interface Context<UT>
    extends OrderedSetBase.Context<UT, OrderedSet.Types> {}

  export interface Types extends OrderedSetBase.Types {
    normal: OrderedSet<this['_T']>;
    nonEmpty: OrderedSet.NonEmpty<this['_T']>;
    context: OrderedSet.Context<this['_T']>;
    builder: OrderedSet.Builder<this['_T']>;
    sourceContext: CustomBase.RSetBase.Context<this['_T']>;
    sourceSet: CustomBase.RSetBase<this['_T']>;
    sourceSetNonEmpty: CustomBase.RSetBase.NonEmpty<this['_T']>;
  }
}

export const OrderedSet = {
  /**
   * Returns a new OrderedSet context instance based on the given `options`.
   * @typeparam UT - the upper element type for which the context can create instances
   * @param options - an object containing the following properties:
   * * listContext - the list context to use for element ordering
   * * setContext - the set context to use for element sets
   */
  createContext<UT>(options: {
    listContext?: List.Context;
    setContext: RSet.Context<UT>;
  }): OrderedSet.Context<UT> {
    return new OrderedSetContextImpl<UT, OrderedSetTypes>(
      options.listContext ?? List.defaultContext(),
      options.setContext
    ) as any;
  },
};