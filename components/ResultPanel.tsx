"use client";

import type { AppState } from "../app/page";

type Props = {
  state: AppState;
};

export default function ResultPanel({ state }: Props) {
  const copyPrompt = async () => {
    if (!state.output) return;
    await navigator.clipboard.writeText(state.output);
  };

  const exportPrompt = () => {
    if (!state.output) return;

    const blob = new Blob([state.output], {
      type: "text/plain"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "prompter-ct-pro-output.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <aside className="result-panel">
      <div className="result-top">
        <h2>AI Output Console</h2>
        <div className="mini-badge">LIVE</div>
      </div>

      <div className="decoded-box">
        <div className="decoded-title">AI DECODED INTENT</div>
        <p>
          {state.decodedIntent ||
            "AI understanding will appear here after generation."}
        </p>
      </div>

      <textarea
        value={state.output}
        readOnly
        placeholder="Production-grade prompt output will appear here..."
      />

      <div className="actions">
        <button onClick={copyPrompt}>Copy Prompt</button>
        <button onClick={exportPrompt}>Export TXT</button>
      </div>
    </aside>
  );
}
