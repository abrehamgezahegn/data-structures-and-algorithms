class Graph {
  constructor() {
    this.numberOfNode = 0;
    this.graph = {};
  }

  addVertex(value) {
    this.graph[value] = [];
  }

  addRelation(vertex, relatedTo) {
    let node = this.graph[vertex];
    console.log("node is ", node);
    if (!node) return undefined;
    // if(node)
    this.graph[vertex] = [...this.graph[vertex], relatedTo];
    this.numberOfNode++;
  }

  showRelation() {}
}

const graph = new Graph();

const getRandom = max => {
  return Math.floor(Math.random() * max);
};

// for (let i = 1; i < 7; i++) {
//   graph.addVertex(i);
//   graph.addRelation(i, getRandom(7));
//   graph.addRelation(i, getRandom(7));
// }

graph.addVertex(9);

graph.addRelation(9, 1);

console.log(graph);
