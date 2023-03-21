"use strict";
function getdetails() {
    return fetch('DETAILS.JSON')
        .then(res => res.json())
        .then(res => {
        console.log(res);
        return res;
    });
}
getdetails();
function getfakeapi() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => console.log(json));
}
getfakeapi();
