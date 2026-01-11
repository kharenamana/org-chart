export default function OrgChartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">Org Chart</h1>
      {children}
    </div>
  );
}
