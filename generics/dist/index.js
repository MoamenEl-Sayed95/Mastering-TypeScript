"use strict";
// // const nums: number[] = [];
// const nums: Array<number> = [];
// const colors: Array<string> = [];
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// console.dir(inputEl);
// inputEl.value = "Hacked!";
// const btn = document.querySelector<HTMLButtonElement>(".btn")!;
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
// identity<number>(7);
// identity<string>("hello");
// identity<Cat>()
function getRandomElement(list) {
    var randIxd = Math.floor(Math.random() * list.length);
    return list[randIxd];
}
console.log(getRandomElement(["a", "b", "c"]));
getRandomElement([5, 6, 21, 354, 567, 234, 654]);
getRandomElement([1, 2, 3, 4]);
function merge(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
var comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
console.log(merge({ name: "Colt" }, { num: 9 }));
// function printDoubleLength<T extends Lengthy>(thing:T):number{
//     return thing.length * 2;
// }
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength("asdasd");
printDoubleLength(234);
function makeEmptyArray() {
    return [];
}
var nums = makeEmptyArray();
var bools = makeEmptyArray();
var VideoPlaylist = /** @class */ (function () {
    function VideoPlaylist() {
        this.videos = [];
    }
    return VideoPlaylist;
}());
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.queue = [];
    }
    Playlist.prototype.add = function (el) {
        this.queue.push(el);
    };
    return Playlist;
}());
var songs = new Playlist();
var videos = new Playlist();
videos.add();
