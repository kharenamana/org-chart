import './globals.css';

import type { Metadata } from 'next';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import { ReduxProvider } from '@/providers/ReduxProvider';

export const metadata: Metadata = {
  title: 'PeopleFusion - Organizational Chart',
  description:
    'Interactive organizational chart with ReactFlow and Dagre layout',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="font-org">
        <ReduxProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
