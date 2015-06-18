var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
Animal;
var Animal = (function () {
    function Animal(name, _eyes) {
        this._name = name;
        this._eyes = _eyes;
    }
    Object.defineProperty(Animal.prototype, "eyes", {
        get: function () {
            return this._eyes;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
})();
var Spider = (function (_super) {
    __extends(Spider, _super);
    function Spider(name) {
        _super.call(this, name, 8);
    }
    return Spider;
})(Animal);
// class Bat extends Animal
var charlotte = new Spider('Charlotte');
alert(charlotte.eyes);
