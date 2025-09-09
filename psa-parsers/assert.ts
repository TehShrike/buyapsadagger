function assert(condition: unknown, message?: string): asserts condition {
	if (!condition) {
		throw new Error(message || "Assertion failed")
	}
}

export default assert
