class Candlestick{

    constructor(){
        this.r = 50;
        this.x = width;
        this.y = height - this.r;
    }

    move(){
        this.x -= 5;
    }


    show(){
        image(cImg, this.x, this.y, this.r, this.r);
        // fill(255,50);
        // rect(this.x, this.y, this.r, this.r,)
    }

}