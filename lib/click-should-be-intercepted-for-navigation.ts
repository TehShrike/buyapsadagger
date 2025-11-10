function eventIsModifiedByKeyPress(event: MouseEvent) {
	return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}
function isLeftClick(event: MouseEvent) {
	return event.button === 0
}

export default function shouldIntercept(event: MouseEvent) {
	return !event.defaultPrevented
		&& !eventIsModifiedByKeyPress(event)
		&& isLeftClick(event)
}
