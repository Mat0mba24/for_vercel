function task(x) {
	const p = new Promise((res, rej) => x < 18 ? res('yes') : rej('no'));
	return p;
}