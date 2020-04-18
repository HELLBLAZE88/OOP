class Revezor {
	//почьта
	whoEmail (thi) {
	return (/.+@.+\.[a-z]+$/.test(thi));
	}

	//сайтек
	whoSait (thi) {
	return (/.+\.[a-z]+$/.test(thi));
	}

	//дата
	whoDate (thi) {
	return (/(\d{2})\.(\d{2})\.(\d{4})/.test(thi));
	}

	//телеш
	whoPhone (thi) {
	return (/^\8\d{3}\d{3}\d{2}\d{2}$/.test(thi));
	}
}

let ktoto = new Revezor();
console.log(ktoto.whoEmail('zorrro@gmail.com'));
console.log(ktoto.whoSait('gateopen.com'));
console.log(ktoto.whoDate('01.02.2011'));
console.log(ktoto.whoPhone('89929155678'));