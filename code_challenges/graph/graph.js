class Vertex {
    constructor(value) {
      this.value = value;
    }
  }
  
  class Edge {
    constructor(vertex, weight) {
      this.vertex = vertex;
      this.weight = weight;
    }
  }
  
  class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
    AddNode(vertex) {
      this.adjacencyList.set(vertex, []);
      return vertex
    }
    AddEge(startVertex, endVertex, weight = 0) {
      if (
        !this.adjacencyList.has(startVertex) ||
        !this.adjacencyList.has(endVertex)
      ) {
        throw new Error('Invalid Vertex');
      }
      const list = this.adjacencyList.get(startVertex);
      list.push(new Edge(endVertex, weight));
    }
  
    getNodes() {
      for (const [vertex] of this.adjacencyList.entries()) {
        return vertex;
      }
    }
    GetNeighbors(vertex){
        if (!this.adjacencyList.had(vertex)){
            throw new Error('Invalid Vertex')
        }
        

    }
    Size(){
        let size = 0
        for (const [vertex] of this.adjacencyList.entries()){
            size = size+1
        }
        return size
    }

  }

  module.exports = {Vertex,Edge,Graph}