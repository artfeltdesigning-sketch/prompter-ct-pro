"use client";

export default function ResultPanel() {
  return (
    <aside className="panel p-6 flex flex-col">
      <h2 className="text-xl font-semibold">AI Output</h2>

      <textarea
        className="mt-6 flex-1 rounded-3xl bg-white/5 border border-white/10 p-5"
        placeholder="Generated prompts / results..."
      />

      <button className="mt-4 px-5 py-4 rounded-2xl bg-white text-black font-semibold">
        Generate
      </button>
    </aside>
  );
}