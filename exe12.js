function Cylinder(height,diametre){
    this.height=height;
    this.diametre=diametre;
}
Cylinder.prototype.volume=function(){
    let radius=this.diametre/2;
    return  this.height*radius*radius*Math.PI;
   

}
let vol=new Cylinder(10,5);
console.log(vol.volume().toFixed(3))
