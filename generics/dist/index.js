"use strict";
// // const nums: number[] = [];
// const nums: Array<number> = [];
// const colors: Array<string> = [];
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
// [4, 5, 6, 7]
// [true, false, true]
// [{}, {}, {}]
