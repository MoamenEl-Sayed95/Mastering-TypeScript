"use strict";
function getRandomElement() { }
(function (list) {
    var randIxd = Math.floor(Math.random() * list.length);
    return list[randIxd];
});
