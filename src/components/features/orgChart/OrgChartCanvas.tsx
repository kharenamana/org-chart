'use client';

import 'reactflow/dist/style.css';

import ReactFlow, { Controls } from 'reactflow';

import { OrgNode } from './OrgNode';
import { useEmployees } from '@/hooks/useEmployee';
import { useOrgGraph } from '@/hooks/useOrgGraph';

const nodeTypes = { orgNode: OrgNode };

export function OrgChartCanvas() {
  const { data, isLoading, error } = useEmployees();
  const { nodes, edges } = useOrgGraph(data);

  if (isLoading) return <p>Loading org chart...</p>;
  if (error) return <p>Failed to load org chart</p>;

  return (
    <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
      <Controls />
    </ReactFlow>
  );
}
