class Node {
    constructor(data,right,left){
        this.data=data;
        this.right=null;
        this.left=null;
    }
    add(data){
        
        if(data<this.data && this.left){
             this.left.add(data)
        }
        else if(data<this.data){
           this.left=new Node(data);
        }
        if(data>this.data && this.right){
             this.right.add(data)
        }
        else if(data>this.data){
           this.right=new Node(data);
        }
        
    }
}

let n=new Node(20);

n.add(45);
//n.add(10);
n.add(49);
// n.add(10);
console.log(n);
///////////////****************************************Graph*************************************** */
class Graph{
    constructor(vertex){
        this.vertex=vertex;
        this.adj=new Map();
   }
add(v){
    this.adj.set(v,[]);
}
addEdge(v,w){
    this.adj.get(v).push(w)
    this.adj.get(w).push(v)
}
print(){
    let keys=this.adj.keys();
   
    for (let key of keys){
        let vals=this.adj.get(key);
        console.log(key)
        console.log(vals)
        let conc=""
    
    
    for (let j of vals)
        conc+= j
    console.log(key+" -> "+ conc)
}
}
}
let g= new Graph();
let vertices=['A','B','C','D'];
for (let i=0;i<vertices.length;i++){
    g.add(vertices[i]);
}
g.addEdge('A','C');
g.addEdge('C','D');
g.addEdge('A','D');
g.addEdge('B','C');
g.print()
console.log(g)
