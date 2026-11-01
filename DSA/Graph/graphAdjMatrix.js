class Graph {
  constructor(vertex) {
    this.mat = Array.from({ length: vertex }, () => Array(vertex).fill(0));
    this.size = vertex;
  }
  add_edge(src, dest) {
    if ((0 <= src < this.size) & (0 <= dest < this.size)) {
      this.mat[src][dest] = 1;
      this.mat[dest][src] = 1;
    } else {
      console.log("Invalid Edge");
    }
  }
  printGraph() {
    for (const mat of this.mat) {
      console.log(Array.from(mat).join(" "));
    }
  }
}

let G = new Graph(5);
G.add_edge(0, 1);
G.add_edge(0, 2);
G.add_edge(1, 3);
G.add_edge(2, 4);
G.add_edge(3, 4);
G.add_edge(2, 3);
G.printGraph();
