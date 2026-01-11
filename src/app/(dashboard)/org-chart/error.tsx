'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="p-6">
      <h2>Something went wrong loading the org chart</h2>
      <button onClick={reset}>Retry</button>
    </div>
  );
}
