import type { CustomBase as CB, RSet } from 'https://deno.land/x/rimbu/collection-types/mod.ts';
import type {
  ArrayNonEmpty,
  RelatedTo,
  ToJSON,
  TraverseState,
} from 'https://deno.land/x/rimbu/common/mod.ts';
import type { MultiMap } from 'https://deno.land/x/rimbu/multimap/mod.ts';
import type {
  FastIterable,
  Stream,
  Streamable,
  StreamSource,
} from 'https://deno.land/x/rimbu/stream/mod.ts';

export interface BiMultiMapBase<
  K,
  V,
  Tp extends BiMultiMapBase.Types = BiMultiMapBase.Types
> extends FastIterable<[K, V]> {
  /**
   * Returns the `context` associated to this collection instance.
   */
  readonly context: CB.WithKeyValue<Tp, K, V>['context'];
  /**
   * Returns the MultiMap representation of the key to value mapping.
   * @example
   * HashBiMultiMap.of([1, 10], [1, 20]).keyValueMap.toArray()
   * // => [[1, [10, 20]]
   */
  readonly keyValueMultiMap: CB.WithKeyValue<Tp, K, V>['keyValueMultiMap'];
  /**
   * Returns the MultiMap representation of the value to key mapping.
   * @example
   * HashBiMultiMap.of([10, 1], [20, 1]).valueKeyMap.toArray()
   * // => [[1, [10, 20]]
   */
  readonly valueKeyMultiMap: CB.WithKeyValue<Tp, K, V>['valueKeyMultiMap'];
  /**
   * Returns false since this collection is known to be non-empty.
   * @example
   * HashBiMultiMap.of([1, 1], [2, 2]).isEmpty   // => false
   */
  readonly isEmpty: boolean;
  /**
   * Returns the number of keys
   * @example
   * HashBiMultiMap.of([1, 10], [1, 20]).keySize       // => 1
   */
  readonly keySize: number;
  /**
   * Returns the number of entries
   * @example
   * HashBiMultiMap.of([1, 10], [2, 10]).keySize       // => 2
   */
  readonly size: number;
  /**
   * Returns a `Stream` containing all entries of this collection as tuples of key and value.
   * @example
   * HashBiMultiMap.of([1, 10], [1, 20]).stream().toArray()  // => [[1, 10], [1, 20]]
   */
  stream(): Stream<[K, V]>;
  /**
   * Returns a `Stream` containing all keys of this collection.
   * @example
   * HashBiMultiMap.of([[1, 'a'], [2, 'b']]).streamKeys().toArray()   // => [1, 2]
   */
  streamKeys(): Stream<K>;
  /**
   * Returns a `Stream` containing all values of this collection.
   * @example
   * HashBiMultiMap.of([[1, 'a'], [2, 'b']]).streamValues().toArray()   // => ['a', 'b']
   */
  streamValues(): Stream<V>;
  /**
   * Returns the collection as a .NonEmpty type
   * @throws RimbuError.EmptyCollectionAssumedNonEmptyError if the collection is empty
   * @example
   * HashBiMultiMap.empty<number, number>().assumeNonEmpty()   // => throws
   * const m: HashBiMultiMap<number, number> = HashBiMultiMap.of([1, 1], [2, 2])
   * const m2: HashBiMultiMap.NonEmpty<number, number> = m     // => compiler error
   * const m3: HashBiMultiMap.NonEmpty<number, number> = m.assumeNonEmpty()
   * @note returns reference to this collection
   */
  assumeNonEmpty(): CB.WithKeyValue<Tp, K, V>['nonEmpty'];
  /**
   * Returns true if there is at least one entry in the collection, and instructs the compiler to treat the collection
   * as a .NonEmpty type.
   * @example
   * const m: HashBiMultiMap<number, number> = HashBiMultiMap.of([1, 1], [2, 2])
   * m.stream().first(0)     // compiler allows fallback value since the Stream may be empty
   * if (m.nonEmpty()) {
   *   m.stream().first(0)   // compiler error: fallback value not allowed since Stream is not empty
   * }
   */
  nonEmpty(): this is CB.WithKeyValue<Tp, K, V>['nonEmpty'];
  /**
   * Returns true if the given `key` is present in the collection.
   * @param key - the key to look for
   * @example
   * const m = HashBiMultiMap.of([1, 'a'], [2, 'b'])
   * m.hasKey(2)    // => true
   * m.hasKey(3)    // => false
   */
  hasKey<UK = K>(key: RelatedTo<K, UK>): boolean;
  /**
   * Returns true if the given `value` is present in the collection.
   * @param value - the value to look for
   * @example
   * const m = HashBiMultiMap.of([1, 'a'], [2, 'b'])
   * m.hasKey('a')    // => true
   * m.hasKey('z')    // => false
   */
  hasValue<UV = V>(key: RelatedTo<V, UV>): boolean;
  /**
   * Returns true if the given key and value entry is in the collection.
   * @param key - the entry key to look for
   * @param value - the entry value to look for
   * @example
   * const m = HashBiMultiMap.of([1, 'a'], [2, 'b'])
   * m.hasEntry(2, 'b')    // => true
   * m.hasEntry(2, 'c')    // => false
   */
  hasEntry<UK = K, UV = V>(
    key: RelatedTo<K, UK>,
    value: RelatedTo<V, UV>
  ): boolean;
  /**
   * Returns the collection with the given `key` associated to the given `value`.
   * @param key - the entry key to add
   * @param value - the entry value to add
   * @example
   * HashBiMultiMap.of([1, 1], [2, 2]).add(1, 2).toArray()
   * // => [[1, 1], [1, 2], [2, 2]]
   */
  add: (key: K, value: V) => CB.WithKeyValue<Tp, K, V>['nonEmpty'];
  /**
   * Returns the collection with the entries from the given `StreamSource` `entries` added.
   * @param entries - a `StreamSource` containing tuples with a key and value
   * @example
   * HashBiMultiMap.of([1, 1]).addEntries([[2, 2], [1, 3]]).toArray()
   * // => [[1, 1], [1, 3], [2, 2]]
   */
  addEntries: {
    (entries: StreamSource.NonEmpty<readonly [K, V]>): CB.WithKeyValue<
      Tp,
      K,
      V
    >['nonEmpty'];
    (entries: StreamSource<readonly [K, V]>): CB.WithKeyValue<
      Tp,
      K,
      V
    >['normal'];
  };
  /**
   * Returns the collection with the values from the given `values` StreamSource associated
   * with the given `key`.
   * @param key - the entry key
   * @param values - a `StreamSource` containing values to associate with the given `key`
   * @example
   * HashBiMultiMap.of([1, 1]).setValues(1, [2, 3]).toArray()
   * // => [[1, 1], [1, 2], [1, 3]]
   */
  setValues: {
    (key: K, values: StreamSource.NonEmpty<V>): CB.WithKeyValue<
      Tp,
      K,
      V
    >['nonEmpty'];
    (key: K, values: StreamSource<V>): CB.WithKeyValue<Tp, K, V>['normal'];
  };
  /**
   * Returns the collection with the keys from the given `keys` StreamSource associated
   * with the given `value`.
   * @param value - the entry value
   * @param keys - a `StreamSource` containing keys to associate with the given `value`
   * @example
   * HashBiMultiMap.of([1, 1]).setKeys(1, [2, 3]).toArray()
   * // => [[1, 1], [2, 1], [3, 1]]
   */
  setKeys: {
    (value: V, keys: StreamSource.NonEmpty<K>): CB.WithKeyValue<
      Tp,
      K,
      V
    >['nonEmpty'];
    (value: V, keys: StreamSource<K>): CB.WithKeyValue<Tp, K, V>['normal'];
  };
  /**
   * Returns a collection containing the values associated with the given `key`.
   * @param key - the key of which to find the values
   * @example
   * const m = HashBiMultiMap.of([1, 1], [1, 2]);
   * m.getValues(1).toArray()
   * // => [1, 2]
   * m.getValues(5).toArray()
   * // => []
   */
  getValues<UK = K>(
    key: RelatedTo<K, UK>
  ): CB.WithKeyValue<Tp, K, V>['keyMultiMapValues'];
  /**
   * Returns a collection containing the keys associated with the given `value`.
   * @param value - the value of which to find the keys
   * @example
   * const m = HashBiMultiMap.of([1, 1], [2, 1]);
   * m.getKeys(1).toArray()
   * // => [1, 2]
   * m.getKeys(5).toArray()
   * // => []
   */
  getKeys<UV = V>(
    value: RelatedTo<V, UV>
  ): CB.WithKeyValue<Tp, K, V>['valueMultiMapValues'];
  /**
   * Returns the collection where the entries associated with given `key` are removed if it was part of the collection.
   * @param key - the key of the entries to remove
   * @example
   * const m = HashBiMultiMap.of([1, 1], [1, 2])
   * m.removeKey(2).toArray()   // => [1, 2]
   * m.removeKey(3) === m       // true
   * @note guarantees same object reference if the key is not present
   */
  removeKey<UK = K>(key: RelatedTo<K, UK>): CB.WithKeyValue<Tp, K, V>['normal'];
  /**
   * Returns the collection where the entries associated with each key in given `keys` are removed if they were present.
   * @param keys - a `StreamSource` of keys to remove
   * @example
   * const m = HashBiMultiMap.of([1, 1], [2, 2])
   * m.removeKeys([1, 3]).toArray()     // => [[2, 2]]
   * m.removeKeys([1, 3, 2]).toArray()  // => []
   * m.removeKeys([3, 4, 5]) === m      // => true
   * @note guarantees same object reference if none of the keys are present
   */
  removeKeys<UK = K>(
    keys: StreamSource<RelatedTo<K, UK>>
  ): CB.WithKeyValue<Tp, K, V>['normal'];
  /**
   * Returns the collection where the entries associated with given `value` are removed if it was part of the collection.
   * @param value - the value of the entries to remove
   * @example
   * const m = HashBiMultiMap.of([1, 2], [2, 2])
   * m.removeValue(2).toArray()   // => [1, 2]
   * m.removeValue(3) === m       // true
   * @note guarantees same object reference if the key is not present
   */
  removeValue<UV = V>(
    value: RelatedTo<V, UV>
  ): CB.WithKeyValue<Tp, K, V>['normal'];
  /**
   * Returns the collection where the entries associated with each value in given `values` are removed if they were present.
   * @param values - a `StreamSource` of values to remove
   * @example
   * const m = HashBiMultiMap.of([1, 1], [2, 2])
   * m.removeValues([1, 3]).toArray()     // => [[2, 2]]
   * m.removeValues([1, 3, 2]).toArray()  // => []
   * m.removeValues([3, 4, 5]) === m      // => true
   * @note guarantees same object reference if none of the keys are present
   */
  removeValues<UV = V>(
    values: StreamSource<RelatedTo<V, UV>>
  ): CB.WithKeyValue<Tp, K, V>['normal'];
  /**
   * Returns the collection where the entry with given `key` or `value` is removed if present.
   * @param key - the entry key
   * @param value - the entry value
   * @example
   * const m = HashBiMultiMap.of([1, 1], [2, 2])
   * m.removeEntry(2, 2).toArray()     // => [[1, 1]]
   * m.removeEntry(1, 2).toArray()     // => [[1, 1], [2, 2]]
   * m.removeEntry(3, 3) === m         // => true
   */
  removeEntry<UK = K, UV = V>(
    key: RelatedTo<K, UK>,
    value: RelatedTo<V, UV>
  ): CB.WithKeyValue<Tp, K, V>['normal'];
  /**
   * Returns the collection where the entries in the given `entries` StreamSource are removed if present.
   * @param entries - a StreamSource containing entries to remove
   * @example
   * const m = HashBiMultiMap.of([1, 1], [2, 2])
   * m.removeEntries([[2, 2], [2, 3]]).toArray()     // => [[1, 1]]
   * m.removeEntries([[1, 2], [4, 3]]).toArray()     // => [[1, 1], [2, 2]]
   * m.removeEntries([[3, 3]]) === m                 // => true
   */
  removeEntries<UK = K, UV = V>(
    entries: StreamSource<[RelatedTo<K, UK>, RelatedTo<V, UV>]>
  ): CB.WithKeyValue<Tp, K, V>['normal'];
  /**
   * Performs given function `f` for each entry of the collection, using given `state` as initial traversal state.
   * @param f - the function to perform for each entry, receiving:
   * * `entry`: the next tuple of a key and value
   * * `index`: the index of the element
   * * `halt`: a function that, if called, ensures that no new elements are passed
   * @param state - (optional) the traverse state
   * @example
   * HashBiMultiMap.of([1, 'a'], [2, 'b'], [3, 'c']).forEach((entry, i, halt) => {
   *  console.log([entry[1], entry[0]]);
   *  if (i >= 1) halt();
   * })
   * // => logs ['a', 1]  ['b', 2]
   * @note O(N)
   */
  forEach(
    f: (entry: [K, V], index: number, halt: () => void) => void,
    state?: TraverseState
  ): void;
  /**
   * Returns a collection containing only those entries that satisfy given `pred` predicate.
   * @param pred - a predicate function receiving:
   * * `entry`: the next entry
   * * `index`: the entry index
   * * `halt`: a function that, when called, ensures no next elements are passed
   * @example
   * HashBiMultiMap.of([1, 'a'], [2, 'b'], [3, 'c']).filter(entry => entry[0] === 2 || entry[1] === 'c').toArray()
   * // => [[2, 'b'], [3, 'c']]
   */
  filter(
    pred: (entry: [K, V], index: number, halt: () => void) => boolean
  ): CB.WithKeyValue<Tp, K, V>['normal'];
  /**
   * Returns an array containing all entries in this collection.
   * @example
   * HashBiMultiMap.of([1, 'a'], [2, 'b']).toArray()   // => [[1, 'a'], [2, 'b']]
   * @note O(log(N))
   */
  toArray(): [K, V][];
  /**
   * Returns a string representation of this collection.
   * @example
   * HashBiMultiMap.of([1, 'a'], [2, 'b']).toString()   // => HashBiMultiMap(1 <=> ['a'], 2 <=> ['b'])
   */
  toString(): string;
  /**
   * Returns a JSON representation of this collection.
   * @example
   * HashBiMultiMap.of([1, 'a'], [2, 'b']).toJSON()   // => { dataType: 'HashBiMultiMap', value: [[1, ['a']], [2, ['b']]] }
   */
  toJSON(): ToJSON<[K, V[]][], this['context']['typeTag']>;
  /**
   * Returns a builder object containing the entries of this collection.
   * @example
   * const builder: HashBiMultiMap.Builder<number, string> = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
   */
  toBuilder: () => CB.WithKeyValue<Tp, K, V>['builder'];
}

export namespace BiMultiMapBase {
  export interface NonEmpty<
    K,
    V,
    Tp extends BiMultiMapBase.Types = BiMultiMapBase.Types
  > extends BiMultiMapBase<K, V, Tp>,
      Streamable.NonEmpty<[K, V]> {
    /**
     * Returns the non-empty MultiMap representation of the key to value mapping.
     * @example
     * HashBiMultiMap.of([1, 10], [1, 20]).keyValueMap.toArray()
     * // => [[1, [10, 20]]
     */
    readonly keyValueMultiMap: CB.WithKeyValue<
      Tp,
      K,
      V
    >['keyValueMultiMapNonEmpty'];
    /**
     * Returns the MultiMap representation of the value to key mapping.
     * @example
     * HashBiMultiMap.of([10, 1], [20, 1]).valueKeyMap.toArray()
     * // => [[1, [10, 20]]
     */
    readonly valueKeyMultiMap: CB.WithKeyValue<
      Tp,
      K,
      V
    >['valueKeyMultiMapNonEmpty'];
    /**
     * Returns false since this collection is known to be non-empty.
     * @example
     * HashBiMultiMap.of([1, 1], [2, 2]).isEmpty   // => false
     */
    readonly isEmpty: false;
    /**
     * Returns a non-empty `Stream` containing all entries of this collection as tuples of key and value.
     * @example
     * HashBiMultiMap.of([1, 1], [2, 2]).stream().toArray()  // => [[1, 1], [2, 2]]
     */
    stream(): Stream.NonEmpty<[K, V]>;
    /**
     * Returns a non-empty `Stream` containing all keys of this collection.
     * @example
     * HashBiMultiMap.of([[1, 'a'], [2, 'b']]).streamKeys().toArray()   // => [1, 2]
     */
    streamKeys(): Stream.NonEmpty<K>;
    /**
     * Returns a non-empty `Stream` containing all values of this collection.
     * @example
     * HashBiMultiMap.of([[1, 'a'], [2, 'b']]).streamValues().toArray()   // => ['a', 'b']
     */
    streamValues(): Stream.NonEmpty<V>;
    /**
     * Returns this collection typed as a 'possibly empty' collection.
     * @example
     * HashBiMultiMap.of([1, 1], [2, 2]).asNormal();  // type: HashBiMultiMap<number, number>
     */
    asNormal(): CB.WithKeyValue<Tp, K, V>['normal'];
    /**
     * Returns true since this collection is known to be non-empty
     * @example
     * HashBiMultiMap.of([1, 1], [2, 2]).nonEmpty()   // => true
     */
    nonEmpty(): true;
    /**
     * Returns the collection with the entries from the given `StreamSource` `entries` added.
     * @param entries - a `StreamSource` containing tuples with a key and value
     * @example
     * HashBiMultiMap.of([1, 1]).addEntries([[2, 2], [1, 3]]).toArray()
     * // => [[1, 1], [1, 3], [2, 2]]
     */
    addEntries: (
      entries: StreamSource<readonly [K, V]>
    ) => CB.WithKeyValue<Tp, K, V>['nonEmpty'];
  }

  export interface Context<
    UK,
    UV,
    Tp extends BiMultiMapBase.Types = BiMultiMapBase.Types
  > {
    /**
     * A string tag defining the specific collection type
     * @example
     * HashBiMultiMap.defaultContext().typeTag   // => 'HashBiMultiMap'
     */
    readonly typeTag: string;
    readonly _types: Tp;

    readonly keyValueMultiMapContext: CB.WithKeyValue<
      Tp,
      UK,
      UV
    >['keyValueMultiMapContext'];
    readonly valueKeyMultiMapContext: CB.WithKeyValue<
      Tp,
      UK,
      UV
    >['valueKeyMultiMapContext'];

    /**
     * Returns the (singleton) empty instance of this type and context with given key and value types.
     * @example
     * HashBiMultiMap.empty<number, string>()    // => HashBiMultiMap<number, string>
     * HashBiMultiMap.empty<string, boolean>()   // => HashBiMultiMap<string, boolean>
     */
    empty: <K extends UK, V extends UV>() => CB.WithKeyValue<
      Tp,
      K,
      V
    >['normal'];
    /**
     * Returns an immutable BiMultiMap, containing the given `entries`.
     * @param entries - a non-empty array of key-value entries
     * @example
     * HashBiMultiMap.of([1, 'a'], [2, 'b'])    // => HashBiMultiMap.NonEmpty<number, string>
     */
    of: <K extends UK, V extends UV>(
      ...entries: ArrayNonEmpty<readonly [K, V]>
    ) => CB.WithKeyValue<Tp, K, V>['nonEmpty'];
    /**
     * Returns an immutable BiMultiMap, containing the entries in the given `sources` `StreamSource` instances.
     * @param sources - an array of `StreamSource` instances contaning key-value entries
     * @example
     * HashBiMultiMap.from([[1, 'a'], [2, 'b']])    // => HashBiMultiMap.NonEmpty<number, string>
     */
    from: {
      <K extends UK, V extends UV>(
        ...sources: ArrayNonEmpty<StreamSource.NonEmpty<readonly [K, V]>>
      ): CB.WithKeyValue<Tp, K, V>['nonEmpty'];
      <K extends UK, V extends UV>(
        ...sources: ArrayNonEmpty<StreamSource<readonly [K, V]>>
      ): CB.WithKeyValue<Tp, K, V>['normal'];
    };
    /**
     * Returns an empty `BiMultiMap` builder instance.
     * @example
     * HashBiMultiMap.builder<number, string>()    // => HashBiMultiMap.Builder<number, string>
     */
    builder: <K extends UK, V extends UV>() => CB.WithKeyValue<
      Tp,
      K,
      V
    >['builder'];
  }

  export interface Builder<
    K,
    V,
    Tp extends BiMultiMapBase.Types = BiMultiMapBase.Types
  > {
    /**
     * Returns the amount of entries in the builder.
     * @example
     * HashBiMultiMap.of([[1, 'a'], [2, 'b']]).toBuilder().size
     * // => 2
     */
    readonly size: number;
    /**
     * Returns true if there are no entries in the builder.
     * @example
     * HashBiMultiMap.of([[1, 'a'], [2, 'b']]).toBuilder().isEmpty
     * // => false
     */
    readonly isEmpty: boolean;
    /**
     * Returns true if the given `key` is present in the builder.
     * @param key - the key to look for
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.hasKey(2)    // => true
     * m.hasKey(3)    // => false
     */
    hasKey<UK = K>(key: RelatedTo<K, UK>): boolean;
    /**
     * Returns true if the given `value` is present in the builder.
     * @param value - the value to look for
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.hasValue('a')    // => true
     * m.hasValue('z')    // => false
     */
    hasValue<UV = V>(value: RelatedTo<V, UV>): boolean;
    /**
     * Returns true if the given `key` `value` entry is present in the builder.
     * @param key - the key to look for
     * @param value - the value to look for
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.hasEntry(1, 'a')    // => true
     * m.hasEntry(1, 'z')    // => false
     */
    hasEntry<UK = K, UV = V>(
      key: RelatedTo<K, UK>,
      value: RelatedTo<V, UV>
    ): boolean;
    /**
     * Returns a collection representing the values currently associated with given `key`.
     * @param key - the key for which to find the values
     * @note since it is unsafe to return the internal builder object, the result colleciton will
     * be build upon each call to getValues.
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.getValues(1).toArray()   // => ['a']
     * m.getValues(3).toArray()   // => []
     */
    getValues<UK = K>(
      key: RelatedTo<K, UK>
    ): CB.WithKeyValue<Tp, K, V>['keyMultiMapValues'];
    /**
     * Returns a collection representing the keys currently associated with given `value`.
     * @param value - the value for which to find the keys
     * @note since it is unsafe to return the internal builder object, the result colleciton will
     * be build upon each call to getKeys.
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.getKeys('a').toArray()   // => [1]
     * m.getKeys('z').toArray()   // => []
     */
    getKeys<UV = V>(
      value: RelatedTo<V, UV>
    ): CB.WithKeyValue<Tp, K, V>['valueMultiMapValues'];
    /**
     * Sets the values associated to given `key` to the values in the given `values` StreamSource.
     * @param key - the key to which to associate the values
     * @param values - a StreamSource containing the values to associate to the key
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.setValues(1, ['b', 'c']).getValues(1).toArray() // => ['b', 'c']
     */
    setValues: (key: K, values: StreamSource<V>) => boolean;
    /**
     * Sets the keys associated to given `value` to the keys in the given `keys` StreamSource.
     * @param value - the value to which to associate the keys
     * @param keys - a StreamSource containing the keys to associate to the value
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.setKeys('a', [3, 4]).getKeys('a').toArray() // => [3, 4]
     */
    setKeys: (value: V, keys: StreamSource<K>) => boolean;
    /**
     * Associates given `key` with given `value` in the builder.
     * @param key - the entry key
     * @param value - the entry value
     * @returns true if the data in the builder has changed
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.set(1, 'a')   // => false
     * m.set(1, 'b')   // => true
     */
    add: (key: K, value: V) => boolean;
    /**
     * Adds given `entries` to the builder.
     * @param entries - a `StreamSource` containing the entries to add
     * @returns true if the data in the builder has changed
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.addEntries([1, 'a'], [3, 'c']])   // => true
     * m.addEntries([])                    // => false
     */
    addEntries: (entries: StreamSource<readonly [K, V]>) => boolean;
    /**
     * Removes the entries related to given `key` from the builder.
     * @param key - the key to remove
     * @returns true if the data in the builder has changed
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.removeKey(2)        // => true
     * m.removeKey(3)        // => false
     */
    removeKey<UK = K>(key: RelatedTo<K, UK>): boolean;
    /**
     * Removes the entries related to the given `keys` `StreamSource` from the builder.
     * @param keys - the `StreamSource` containing the keys to remove.
     * @returns true if the data in the builder has changed
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.removeKeys([3, 4, 5])  // => false
     * m.removeKeys([1, 10])    // => true
     */
    removeKeys<UK = K>(keys: StreamSource<RelatedTo<K, UK>>): boolean;
    /**
     * Removes the entries related to given `value` from the builder.
     * @param value - the value to remove
     * @returns true if the data in the builder has changed
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.removeValue('b')        // => true
     * m.removeValue('c')        // => false
     */
    removeValue<UV = V>(value: RelatedTo<V, UV>): boolean;
    /**
     * Removes the entries related to the given `values` `StreamSource` from the builder.
     * @param values - the `StreamSource` containing the values to remove.
     * @returns true if the data in the builder has changed
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.removeValues(['c', 'd', 'e'])  // => false
     * m.removeValues(['a', 'e'])       // => true
     */
    removeValues<UV = V>(values: StreamSource<RelatedTo<V, UV>>): boolean;
    /**
     * Removes the entry of given `key` and `value` from the builder.
     * @param key - the entry key
     * @param value - the entry value
     * @returns true if the data in the builder has changed
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.removeEntry(1, 'c')   // => false
     * m.removeEntry(1, 'a')   // => true
     */
    removeEntry<UK = K, UV = V>(
      key: RelatedTo<K, UK>,
      value: RelatedTo<V, UV>
    ): boolean;
    /**
     * Removes the entries in the given `entries` `StreamSource` from the builder.
     * @param entries - the `StreamSource` containing the entries to remove.
     * @returns true if the data in the builder has changed
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * m.removeEntries([[1, 'c'], ['2', 'a']])  // => false
     * m.removeEntries([[1, 'a']])              // => true
     */
    removeEntries<UK = K, UV = V>(
      entries: StreamSource<[RelatedTo<K, UK>, RelatedTo<V, UV>]>
    ): boolean;
    /**
     * Performs given function `f` for each entry of the builder.
     * @param f - the function to perform for each element, receiving:
     * * `entry`: the next key-value entry
     * * `index`: the index of the element
     * * `halt`: a function that, if called, ensures that no new elements are passed
     * @throws RibuError.ModifiedBuilderWhileLoopingOverItError if the builder is modified while
     * looping over it
     * @example
     * HashBiMultiMap.of([1, 'a'], [2, 'b'], [3, 'c']).toBuilder().forEach((entry, i, halt) => {
     *  console.log([entry[1], entry[0]]);
     *  if (i >= 1) halt();
     * })
     * // => logs ['a', 1]  ['b', 2]
     * @note O(N)
     */
    forEach(
      f: (entry: [K, V], index: number, halt: () => void) => void,
      state?: TraverseState
    ): void;
    /**
     * Returns an immutable collection instance containing the entries in this builder.
     * @example
     * const m = HashBiMultiMap.of([1, 'a'], [2, 'b']).toBuilder()
     * const m2: HashBiMultiMap<number, string> = m.build()
     */
    build(): CB.WithKeyValue<Tp, K, V>['normal'];
  }

  export interface Types extends CB.KeyValue {
    limitKey: true;
    limitValue: true;
    context: BiMultiMapBase.Context<this['_K'], this['_V']>;
    normal: BiMultiMapBase<this['_K'], this['_V']>;
    nonEmpty: BiMultiMapBase.NonEmpty<this['_K'], this['_V']>;
    builder: BiMultiMapBase.Builder<this['_K'], this['_V']>;
    keyValueMultiMapContext: MultiMap.Context<this['_K'], this['_V']>;
    valueKeyMultiMapContext: MultiMap.Context<this['_V'], this['_K']>;
    keyValueMultiMap: MultiMap<this['_K'], this['_V']>;
    valueKeyMultiMap: MultiMap<this['_V'], this['_K']>;
    keyValueMultiMapNonEmpty: MultiMap.NonEmpty<this['_K'], this['_V']>;
    valueKeyMultiMapNonEmpty: MultiMap.NonEmpty<this['_V'], this['_K']>;
    keyMultiMapValues: RSet<this['_V']>;
    valueMultiMapValues: RSet<this['_K']>;
  }
}