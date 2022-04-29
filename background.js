class Background_img{
    constructor(){
        this.r = 50;
        this.x = width;
        this.y = height - this.r;
}


move(){
    this.x += 5;
}
show(){
    image(bImg, this.x, this.y, this.r, this.r);
    
}

}