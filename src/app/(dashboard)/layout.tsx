import type { Metadata } from 'next';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/TopBar';

export const metadata: Metadata = {
  title: 'Org Flow',
  description: 'A dashboard to show organisational flow!',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar />
        <main className="flex-1 overflow-auto p-6 bg-org-background">
          {children}
        </main>
      </div>
    </div>
  );
}
