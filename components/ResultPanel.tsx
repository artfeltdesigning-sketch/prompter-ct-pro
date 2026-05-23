"use client";

type Props = {
  output: string;
};

export default function ResultPanel({
  output
}: Props) {
  const copyPrompt = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  const exportPrompt = () => {
    if (!output) return;

    const blob = new Blob([output], {
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
    <aside className="result-panel glass-panel">
      <div className="result-header">
        <div>
          <h2>AI Output Console</h2>
          <p>Production-grade prompt output</p>
        </div>

        <div className="live-badge">
          LIVE
        </div>
      </div>

      <textarea
        readOnly
        value={output}
        placeholder="AI generated premium prompt will appear here..."
      />

      <div className="action-row">
        <button
          className="primary-btn"
          onClick={copyPrompt}
        >
          Copy Prompt
        </button>

        <button
          className="secondary-btn"
          onClick={exportPrompt}
        >
          Export TXT
        </button>
      </div>
    </aside>
  );
}
