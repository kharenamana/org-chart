import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="w-21 border-r p-4">
      <nav className="space-y-2">
        <Link href="/org-chart">Org Chart</Link>
      </nav>
    </aside>
  );
}
