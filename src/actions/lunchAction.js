export function newLunch(obj) {
	return {
		type: "newLunch",
		data: obj
	};
}

export function deleteLunch(key) {
	return {
		type: "newLunch",
		data: key
	};
}