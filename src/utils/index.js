// base source: https://github.com/facebook/docusaurus/blob/main/website/src/utils/jsUtils.ts

export function sortBy(array, getter) {
	function compareBy(getter) {
		return (a, b) =>
			getter(a) > getter(b) ? 1 : getter(b) > getter(a) ? -1 : 0;
	}

	const sortedArray = [...array];
	sortedArray.sort(compareBy(getter));
	return sortedArray;
}

export function toggleListItem(list, item) {
	const itemIndex = list.indexOf(item);
	if (itemIndex === -1) {
		return list.concat(item);
	} else {
		const newList = [...list];
		newList.splice(itemIndex, 1);
		return newList;
	}
}
