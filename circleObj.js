class Circle {
    constructor() {
        this.radius = prompt("Please give me a radius");
    }
    calcArea() {
        let area = this.radius * this.radius * Math.PI;
        return area;
    }
    outPutArea(){
        let el = document.getElementById("output");
        let text = document.createTextNode(`The circle has a radius of ${this.radius} and therefore an area of ${this.calcArea()}`);
        el.appendChild(text);
    }
    drawCircle(){
        //1) Grab our target element
        let el = document.getElementById("outputCircle");
        //2) Create an html object 
        let cir = document.createElement("div");

        //3) Add on the circle class, present in our CSS Sheet
        cir.setAttribute("class","circle");
        //4) Setup a width and height
        let height = this.radius;
        let width = this.radius;
        
        //5) Add into our new object's style tag, the width and the height
        cir.style.width = `${width}px`;
        cir.style.height = `${height}px`;

        //6) We inject our circle into our target div 
        el.appendChild(cir);
    }

}

let c = new Circle();
c.outPutArea();
c.drawCircle();