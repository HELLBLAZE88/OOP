class MoyaStr {

	// перевёртыш
	reverse(thi) {
	return (thi.split('').reverse().join(''));
	}

	// башая буква
	ucFirst(thi) {
	return (thi.slice(0,1).toUpperCase() + thi.slice(1));
	}

	// башая буква для всех
	ucWords(thi) {
	let sl = thi.split(' ');
	for (let i = 0; i < sl.length; i++) {
		sl[i] = sl[i].slice(0,1).toUpperCase() + sl[i].slice(1);}
	return sl.join(' ');
	}
}

let slovco = new MoyaStr();
console.log(slovco.reverse('здаров'));
console.log(slovco.ucFirst('админ'));
console.log(slovco.ucWords('где поднятие сервера'));