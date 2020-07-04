// function Cylinder(height,diametre){
//     this.height=height;
//     this.diametre=diametre;
// }
// Cylinder.prototype.volume=function(){
//     let radius=this.diametre/2;
//     return  this.height*radius*radius*Math.PI;
   

// }
// let vol=new Cylinder(10,5);
// console.log(vol.volume().toFixed(3))
const bubblesort =(arr)=>
{
  
     let end=arr.length-1;
for (let i=0,j=1;i<end;i++,j++)
{
    
    if(arr[i]>arr[j]){
        swapped=true;
        [arr[i],arr[j]]=[arr[j],arr[i]];
        
        end--;
}
}

}
const arr=[6,4,0,3,-2,1];
let swapped=false;
do{
    console.log(bubblesort(arr));
}while(swapped)
