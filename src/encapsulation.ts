
class Encapsulate {
    private name: string | undefined;

    

    public getname(): any {
        console.log("Name: " + this.name);
    }

    public setname(value: string) {
        this.name = value;
    }
}
let h1 = new Encapsulate();
h1.setname('John Doe');
h1.getname();
