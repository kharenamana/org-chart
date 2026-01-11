import { applyDagreLayout } from '@/lib/dagreLayout';

export const useOrgGraph = (employees) => {
  if (!employees) return { nodes: [], edges: [] };

  const nodes = employees.map((emp) => ({
    id: emp.id,
    type: 'orgNode',
    data: emp,
    position: { x: 0, y: 0 },
  }));

  const edges = employees
    .filter((e) => e.managerId)
    .map((e) => ({
      id: `${e.managerId}-${e.id}`,
      source: e.managerId!,
      target: e.id,
    }));

  return {
    nodes: applyDagreLayout(nodes, edges),
    edges,
  };
};
