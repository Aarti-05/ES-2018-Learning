class Graph{
constructor(vertex){
    this.vertex=vertex;
    this.adj=new Map()
}
add(v){
    this.adj.set(v,[])
    console.log(this.adj)
}
addEdge(s,d){
    this.adj.get(s).push(d)
    this.adj.get(d).push(s)
}
print(){
   
    for(let i of this.adj.keys()){
        let vals=this.adj.get(i);
        console.log(vals)
        let conc="";
        for(let j of vals)
        conc+=j;
        console.log(i +" => "+ conc)
    }
}
bfs(start){
    let result=[];
    let queue=[];
    let visited={};
    queue.push(start);
    visited[start]=true;
    console.log(visited)
    while(queue.length){
        console.log(visited)
        let curV=queue.shift();
        result.push(curV);
        console.log(result)
        let n=this.adj.get(curV)
        console.log(curV)
        for (let i of this.adj.get(curV))
      if(!visited[i]){
          visited[i]=true;
          console.log(i)
          queue.push(i)
         ;
      }
    }
    return   result;
  
}
dfs(start){
    let result=[];
    let stack=[];
    let visited={};
   
    stack.push(start);
    visited[start]=true;
    while(stack.length){
        let curV=stack.pop();
        result.push(curV);
        let n=this.adj.get(curV)
        console.log(curV)
        for (let i of this.adj.get(curV))
      if(!visited[i]){
          visited[i]=true;
          console.log(i)
          stack.push(i)
         ;
      }
    }
    return result
}

}
let g=new Graph(5);
let vertices=['A','B','C','D','E']

for (let i of vertices){
    g.add(i)
}
g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('B','D')
g.addEdge('D','C')
g.addEdge('D','A')
g.addEdge('D','E')
g.print();
console.log(g.bfs('C'))
console.log(g.dfs('C'))