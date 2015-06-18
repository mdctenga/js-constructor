Animal

class Animal {
	private _name: string;
	private _eyes: number;
	
	constructor(name: string, _eyes: number) {
		this._name = name;
		this._eyes = _eyes;
	}
	get eyes() {
		return this._eyes;
	}
}

class Spider extends Animal {
	constructor(name: string) {
		super(name, 8);
	}
}
// class Bat extends Animal
var charlotte = new Spider('Charlotte');

alert(charlotte.eyes);