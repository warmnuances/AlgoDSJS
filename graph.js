class Graph {
  constructor(){
    this.adjList = {};
    this.mapN = {
      "0":"A",
      "1":"B",
      "2":"C",
      "3":"D",
      "4":"E"
    }
  }

  addVertex(vertex){
    let x = parseInt(vertex);
    this.adjList[this.mapN[vertex]] = []
  }

  addEdge(srcEdge, destEdge){
    this.adjList[this.mapN[srcEdge]].push(this.mapN[destEdge]);
  }

  dfs(){
    // const mapI = {
    //   0:"A",
    //   1":"B",
    //   2":"C",
    //   3":"D",
    //   4:"E"
    // }

    const mapI = ["A","B","C","D","E"]
    const length = Object.keys(this.adjList).length


    let stack = [];
    let visited = new Array(length).fill(false);
    let adjList = this.adjList;


    for (let i = 0; i < length; i++) {
      if (visited[i] == false) 
				dfsUnit(mapI[i], visited, stack); 
    }
			

    console.log(stack);
    // while(stack.length != 0){
    //   console.log(stack.pop + "");
    // }
   


    function dfsUnit(data, visited ,stack){
      visited[data] = true;

      for(let item of adjList[data]){
        if(visited[item] === false){
          dfsUnit(mapI[item],visited,stack)
        }        
      }

      stack.push(data);
      

      // path = [];
      
    }

  }


}



module.exports = Graph;