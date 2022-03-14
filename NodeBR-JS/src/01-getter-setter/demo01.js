// ****************************************************************

// GETTER & SETTER

const person = {
	_name: '', // private variable

	get name() {
		return this._name;
	},

	set name(value) {
		this._name = value.split(' ');
		this._name = `${this._name[0].slice(0, 1).toUpperCase()}. ${this._name[this._name.length - 1].toUpperCase()}`;
	},
};
person.name = 'Bruce Lee';
console.log(person.name);

const animal = {
	_id: '123',
	// get id() {
	// 	return this._id;
	// },
	set id(valor) {
		this._id = valor;
	},
};
console.log(animal.id);

// ****************************************************************
