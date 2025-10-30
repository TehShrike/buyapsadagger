import assert from '#lib/assert.ts'

export const for_each = <T>(arr: readonly T[], fn: (item: T, index: number) => void) => {
	let i=0, len=arr.length;

	for (; i < len; i++) {
		// @ts-expect-error
		fn(arr[i], i)
	}
}
