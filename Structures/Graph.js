class DirectedGraph {
    constructor() {
        this.AdjList = new Map();
    }
    
    addVertex(vertex) {
        if (!this.AdjList.has(vertex)) {
            this.AdjList.set(vertex, []);       // we can use Set instead of []
        }
        else {
            console.log(`Vertex ${vertex} already exist!`);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.AdjList.has(vertex1)) {
            if (this.AdjList.has(vertex2)) {
                const edges = this.AdjList.get(vertex1);
                if (!edges.includes(vertex2)) {
                    edges.push(vertex2);
                }
            } else {
                return `Graph does not contain vertex ${vertex2}, create vertex first`
            }
        } else {
            return `Graph does not contain vertex ${vertex1}, create vertex first`;
        }
    }

    print() {
        for (const [key, value] of this.AdjList) {
            console.log(key, ' -> ', value);
        }
    }

    breadthFirstSearch(source, destination) {        // search for a path, answers the question: does the path exist?
        // TODO - process the case when there is no such source in the graph
        const visited = {};
        const queue = [];
        visited[source] = true;
        queue.push(source);
        while(queue.length > 0) {
            const current = queue.pop();
            if (current === destination) {
                // TODO - print the path
                return true;
            }
            const edges = this.AdjList.get(current);
            edges.forEach((node) => {
                if (!visited[node]) {
                    queue.unshift(node);
                    visited[node] = true;
                }
            })
        }
        return false;
    }

    depthFirstSearch(source, destination, visited = {}) {
        if (source in visited) {
            return false;
        }
        if (source === destination) {
            // TODO - print the path
            return true;
        }
        visited[source] = true ;
        const nodes = this.AdjList.get(source);
        for (let i = 0; i < nodes.length; i++) {
            if (this.depthFirstSearch(nodes[i], destination, visited)) {
                return true;
            }
        }
        return false;
    }
}


const graph = new DirectedGraph();
const arr = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < arr.length; i++) {
    graph.addVertex(arr[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');
graph.print();
console.log('is there a path from A to F? - ', graph.depthFirstSearch('A', 'F'));
console.log('is there a path from A to F? - ', graph.breadthFirstSearch('A', 'F'));
console.log('is there a path from C to E? - ', graph.depthFirstSearch('C', 'E'));
console.log('is there a path from C to E? - ', graph.breadthFirstSearch('C', 'E'));