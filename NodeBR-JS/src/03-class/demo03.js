// ****************************************************************

// Classes

class Pilot {
	constructor(name, age, flightTime, hasPermission) {
		this.name = name;
		this.age = age;
		this.flightTime = flightTime;
		this.hasPermission = hasPermission;
	}
}

const pilotA = new Pilot('Pedro', new Date(1982, 8, 20), '16 years', true);

console.log(pilotA);

class HeroA {
	attack() {
		console.log('attack!');
	}

	defense() {
		console.log('shield up!');
	}
}

const heroA = new HeroA();

heroA.attack();
heroA.defense();

// with constructor
class HeroB {
	constructor(name, power) {
		this.name = name;
		this.power = power;
	}
	attack() {
		console.log(`${this.name}'s attack!'`);
	}
}

const heroB = new HeroB('Saitama', 'Powerful Punch');
console.log(heroB);
heroB.attack();

// with static methods
class HeroC {
	static getAge(birthYear) {
		return 2022 - birthYear;
	}
}

const age = HeroC.getAge(1986);
console.log(age);

//chamando os metodos das Classes

class Test {
	static hello() {
		console.log('hello');
	}

	hi() {
		console.log('hi');
	}
}

Test.hello();
Test['hello']();
new Test().hi();
new Test()['hi']();

// ****************************************************************
