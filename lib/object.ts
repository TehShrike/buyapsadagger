export const object_keys = <T extends object>(obj: T) => Object.keys(obj) as (keyof T)[]
export const object_entries = <T extends Record<string, unknown>>(obj: T) => Object.entries(obj) as [keyof T, T[keyof T] extends unknown[] ? T[keyof T] : never][]
export const object_from_entries = <KEY extends string, VALUE>(entries: [KEY, VALUE][]): { [s in KEY]: VALUE } =>
	// @ts-expect-error Object.entries is dumb and always returns string instead of the type of the key
	Object.fromEntries(entries)

