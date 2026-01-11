'use client';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body className="p-6">
        <h2>Something went wrong</h2>
        <button onClick={reset}>Retry</button>
      </body>
    </html>
  );
}
