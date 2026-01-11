import dagre from 'dagre';

export function applyDagreLayout(nodes, edges) {
  const g = new dagre.graphlib.Graph();
  g.setGraph({ rankdir: 'TB', ranksep: 100, nodesep: 50 });
  g.setDefaultEdgeLabel(() => ({}));

  nodes.forEach((n) => g.setNode(n.id, { width: 260, height: 120 }));
  edges.forEach((e) => g.setEdge(e.source, e.target));

  dagre.layout(g);

  return nodes.map((n) => {
    const { x, y } = g.node(n.id);
    return { ...n, position: { x, y } };
  });
}
