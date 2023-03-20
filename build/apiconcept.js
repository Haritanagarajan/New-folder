"use strict";
function getcolours() {
    return fetch('colors.json')
        .then(res => res.json())
        .then(res => {
        console.log(res);
        return res;
    });
}
getcolours();
function fakeapi() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => console.log(json));
}
fakeapi();
