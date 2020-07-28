// class Node {
//     constructor(data,right,left){
//         this.data=data;
//         this.right=null;
//         this.left=null;
//     }
//     add(data){
        
//         if(data<this.data && this.left){
//              this.left.add(data)
//         }
//         else if(data<this.data){
//            this.left=new Node(data);
//         }
//         if(data>this.data && this.right){
//              this.right.add(data)
//         }
//         else if(data>this.data){
//            this.right=new Node(data);
//         }
        
//     }
// }

// let n=new Node(20);

// n.add(45);
// n.add(10);
// n.add(49);
// n.add(10);
// console.log(n);
// ///////////////****************************************Graph*************************************** */
// class Graph{
//     constructor(vertex){
//         this.vertex=vertex;
//         this.adj=new Map();
//    }
// add(v){
//     this.adj.set(v,[]);
// }
// addEdge(v,w){
//     this.adj.get(v).push(w)
//     this.adj.get(w).push(v)
// }
// print(){
//     let keys=this.adj.keys();
   
//     for (let key of keys){
//         let vals=this.adj.get(key);
//         console.log(key)
//         console.log(vals)
//         let conc=""
    
    
//     for (let j of vals)
//         conc+= j
//     console.log(key+" -> "+ conc)
// }
// }


// BFS(start) {
    
//     const queue = [start];
//     const result = [];
//     const visited = {};
//     visited[start] = true;
    
//     let currentVertex;
//     while (queue.length) {
//       currentVertex = queue.shift();
//       result.push(currentVertex);
//       this.adjacencyList[currentVertex].forEach(neighbor => {
//         if (!visited[neighbor]) {
//           visited[neighbor] = true;
//           queue.push(neighbor);
//         }
//       });
//     }
//     return result;
// }
// }
// let g= new Graph();
// let vertices=['A','B','C','D'];
// for (let i=0;i<vertices.length;i++){
//     g.add(vertices[i]);
// }
// g.addEdge('A','C');
// g.addEdge('C','D');
// g.addEdge('A','D');
// g.addEdge('B','C');
// g.print()
// console.log(g)
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class Tree{
    constructor(data){
        this.root=new Node(data);
    }
    insert(data){
        let n=new Node(data);
        
        const search=node=>{
            if(data<node.data){
                if(!node.left){
                    node.left=n;
                }else{
                    search(node.left)
                }
            }
            else if(data>node.data){
                if(!node.right){
                    node.right=n
                }else{
                    search(node.right)
                }

            }
          
        }
        
        search(this.root) 
    }
    size(){
         return this.count
    }
    contains(data){
  let curNode=this.root;
  while(curNode){
      if(data===curNode.data){
          return true;
      }
      else if(data<curNode.data){
          curNode=curNode.left;
      }else{
          curNode=curNode.right
      }
  }
  return false;
    }
    min(){
        let curNode=this.root;
        while(curNode.left){
            curNode=curNode.left;
        }
        return curNode.data
 }
    max(){
        let curNode=this.root;
        while(curNode.right){
            curNode=curNode.right;
        }
        return curNode.data
    }
    dfsInorder(){
    let nodes=[];
    const traverse=node=>{
        if(node.left) traverse(node.left);
         nodes.push(node.data);
         if(node.right) traverse(node.right);
    }
    traverse(this.root);
    console.log(nodes)
    return nodes;
    }
    dfsPreorder(){
        let nodes=[];
    const traverse=node=>{
        nodes.push(node.data);
        console.log(node.data)
        if(node.left){
            traverse(node.left);
        }
       if(node.right)traverse(node.right);}
    traverse(this.root);
    return nodes;
    }
    dfsPostorder(){
        let nodes=[];
        const traverse=node=>{
          
           
            if(node.left){
                traverse(node.left);
            }
           
        
        if(node.right)traverse(node.right);
        nodes.push(node.data);
        console.log(node.data);return nodes;
    }
        traverse(this.root);
        return nodes
    }
    bfs(){
        let result=[];
        let queue=[];
      (queue.push(this.root)) 
      //console.log(queue[0].data)
      while(queue.length){
         // console.log(queue.length);
          let curNode=queue.shift();
          
          console.log("1 equ")
          result.push(curNode.data)
          console.log("result:" +result)
          if(curNode.left){
            (queue.push(curNode.left)) 
             console.log("2 equ")
          }
          if(curNode.right){
              (queue.push(curNode.right))
              console.log("3 equ")
          }
          
      }
      return result
    }
    
}
let t=new Tree(15);
t.insert(36)
t.insert(28)
t.insert(39)
t.insert(3)
t.insert(12)
t.insert(2);
//console.log(t);
//t.min();
// console.log(t.max());
// console.log(t.dfsInorder());
// console.log(t.dfsPreorder())
// console.log(t.dfsPostorder())
console.log(t.bfs())

