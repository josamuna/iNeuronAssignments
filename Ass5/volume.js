/*
    Author: Josue Isamuna Nkembo
    Email : josamuna2009@gmail.com

    Write a JavaScript program to get the volume of a Cylinder, Sphere and Cone with four decimal 
    places using objects and classes.

    Create classes for volumes for each geometric shape which returns the output using the getVolume() method.

    eg- to get volume of cylinder
        let obj= new Cylinder(radius,height);
        obj.getVolume();

    Formulas for volumes of the shapes-
    1) Cylinder- Volume = πr2h
    where r is the radius and h is the height of the cylinder.
    2)Sphere- Volume= 4/3π𝑟3
    where r is the radius
    3) Cone- Volume= πr2h/3
    where r is the radius and h is the height of the cone.
*/

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        const volume = (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
        return volume;
    }
};

class Sphere {
    constructor(radius) {
        this.radius = radius;
    }

    getVolume() {
        const volume = ((4/3) * Math.PI * Math.pow(this.radius, 3)).toFixed(4);
        return volume;
    }
}

class Cone {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        const volume = (Math.PI * Math.pow(this.radius, 2) * this.height / 3).toFixed(4);
        return volume;
    }
}

const cylinder = new Cylinder(5, 8);
const volumeCylinder = cylinder.getVolume();
console.log(volumeCylinder); // 628.3185

const sphere = new Sphere(12);
const volumeSphere = sphere.getVolume();
console.log(volumeSphere); // 7238.2295

let cone = new Cone(2, 3); 
const volumeCone = cone.getVolume();
console.log(volumeCone); // 12.5664