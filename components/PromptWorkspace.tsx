"use client";

export default function PromptWorkspace() {
  return (
    <section className="panel p-6 overflow-auto">
      <h2 className="text-2xl font-semibold">
        Creative Director Workspace
      </h2>

      <div className="mt-6">
        <textarea
          className="w-full min-h-[300px] rounded-3xl bg-white/5 border border-white/10 p-5"
          placeholder="Upload image + simple instruction..."
        />
      </div>
    </section>
  );
}