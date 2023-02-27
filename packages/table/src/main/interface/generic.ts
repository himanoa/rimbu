import type { Streamable } from '@rimbu/stream';
import {
  TableContext,
  type ContextImplTypes,
  type TableBase,
  type TableCreators,
} from '@rimbu/table/custom';

/**
 * A type-invariant immutable Table of row key type R, column key type C, and value type V.
 * In the Table, a combination of a row and column key has exactly one value.
 * See the [Table documentation](https://rimbu.org/docs/collections/table) and the [Table API documentation](https://rimbu.org/api/rimbu/table/Table/interface)
 * @typeparam R - the row key type
 * @typeparam C - the column key type
 * @typeparam V - the value type
 * @example
 * ```ts
 * const t1 = HashTableHashColumn.empty<number, string, boolean>()
 * const t2 = HashTableHashColumn.of([1, 'a', true], [2, 'a', false])
 * ```
 */
export interface Table<R, C, V> extends TableBase<R, C, V, Table.Types> {}

export namespace Table {
  /**
   * A non-empty type-invariant immutable Table of row key type R, column key type C, and value type V.
   * In the Table, a combination of a row and column key has exactly one value.
   * See the [Table documentation](https://rimbu.org/docs/collections/table) and the [Table API documentation](https://rimbu.org/api/rimbu/table/Table/interface)
   * @typeparam R - the row key type
   * @typeparam C - the column key type
   * @typeparam V - the value type
   * @example
   * ```ts
   * const t1 = HashTableHashColumn.empty<number, string, boolean>()
   * const t2 = HashTableHashColumn.of([1, 'a', true], [2, 'a', false])
   * ```
   */
  export interface NonEmpty<R, C, V>
    extends TableBase.NonEmpty<R, C, V, Table.Types>,
      Streamable.NonEmpty<[R, C, V]> {}

  /**
   * A context instance for Table implementations that acts as a factory for every instance of this
   * type of collection.
   * @typeparam UR - the upper row key type bound for which the context can be used
   * @typeparam UC - the upper column key type bound for which the context can be used
   */
  export interface Context<UR, UC>
    extends TableBase.Context<UR, UC, Table.Types> {}

  /**
   * A mutable Table builder used to efficiently create new immutable instances.
   * See the [Table documentation](https://rimbu.org/docs/collections/table) and the [Table.Builder API documentation](https://rimbu.org/api/rimbu/table/Table/Builder/interface)
   * @typeparam R - the row key type
   * @typeparam C - the column key type
   * @typeparam V - the value type
   */
  export interface Builder<R, C, V>
    extends TableBase.Builder<R, C, V, Table.Types> {}

  /**
   * Utility interface that provides higher-kinded types for this collection.
   */
  export interface Types extends TableBase.Types {
    readonly normal: Table<this['_R'], this['_C'], this['_V']>;
    readonly nonEmpty: Table.NonEmpty<this['_R'], this['_C'], this['_V']>;
    readonly context: Table.Context<this['_R'], this['_C']>;
    readonly builder: Table.Builder<this['_R'], this['_C'], this['_V']>;
  }
}

export const Table: TableCreators = Object.freeze({
  createContext<UR, UC>(
    options: TableBase.Context.Options<UR, UC, ContextImplTypes>
  ): Table.Context<UR, UC> {
    return Object.freeze(new TableContext<UR, UC, 'Table'>('Table', options));
  },
});
