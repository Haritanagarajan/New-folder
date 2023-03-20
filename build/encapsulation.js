"use strict";
class Encapsulate {
    getname() {
        console.log("Name: " + this.name);
    }
    setname(value) {
        this.name = value;
    }
}
let h1 = new Encapsulate();
h1.setname('John Doe');
h1.getname();
