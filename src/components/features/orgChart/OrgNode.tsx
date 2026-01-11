export function OrgNode({ data }) {
  return (
    <div className="w-[260px] rounded-xl border bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold">{data.title}</p>
      <p className="text-xs text-muted-foreground">{data.department}</p>
      <div className="mt-2 font-medium">{data.name}</div>
    </div>
  );
}
