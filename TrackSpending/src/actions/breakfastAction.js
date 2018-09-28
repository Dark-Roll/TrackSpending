export function newBreakfast(id) {
	return {
		type: "newBreakfast",
		data: id
	};
}

export function deleteBreakfast(key) {
	return {
		type: "newBreakfast",
		data: key
	};
}