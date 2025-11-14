import type { Size } from './option_types.d.ts'
import type { FilterParams, FilterParamKey as FilterParamKey } from "./filter-daggers.ts";

export const ANY = 'any'
export type Any = typeof ANY

export const SIZES = ['micro', 'compact', 'full_size_s'] as const satisfies Size[]

export const default_values = {
	size: 'compact',
	longer_barrel: ANY,
	threaded_barrel: ANY,
	night_sight: ANY,
	optic_compatibility: ANY,
	slide_coating: ANY,
} as const satisfies FilterParams

export const FILTER_PARAM_KEYS: FilterParamKey[] = Object.keys(default_values) as unknown as FilterParamKey[]
