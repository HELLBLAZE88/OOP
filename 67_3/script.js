class Risyika {

	// свойства
	constructor(width, heigth) {
	this.hmm = document.createElement('div');
	this.setWidth(width);
	this.setHeigth(heigth);
	this.hmm.style.border = '2px solid purple';
	document.body.appendChild(this.hmm);
	}

	// методы
	// получение ширины
	getWidth() {
	return this.hmm.style.width;
	}

	// установка ширины
	setWidth(width) {
	this.hmm.style.width = width + 'px';
	}

	// получение высоты
	getHeigth() {
	return this.hmm.style.heigth;
	}

	// установка высоты
	setHeigth(heigth) {
	this.hmm.style.heigth = heigth + 'px';
	}
}

let kartinka = new Risyika(880, 500);
console.log(kartinka.getWidth());
console.log(kartinka.getHeigth());
