"use strict";
function getdetails() {
    return fetch('/product.json')
        .then(res => res.json())
        .then(res => {
        console.log(res);
        return res;
    });
}
getdetails()
    .then(det => {
    console.log(det.map(d => d.name + '' + d.price + '').toString());
});
