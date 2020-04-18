//пользователь
class User {
	constructor (name, fam) {
	this.name = name;
	this.fam = fam;
	}

	getFullName() {
	return this.name + ' ' + this.fam;
	}
}

//студентус
class Studentus extends User {
	constructor (name, fam, hod) {
	super (name, fam);
	this.hod = hod;
	}

	getCourse() {
	let god = new Date();
	let qq = god.getFullYear();
	let nada = qq - this.hod;
	if (nada < 6) {
	return (nada); 
	}
	else { 
	return false;
	}}
}

let polk = new Studentus('Мари', 'Хабаровская', 2013);
console.log(polk.name);
console.log(polk.fam);
console.log(polk.getFullName());
console.log(polk.hod);
console.log(polk.getCourse());