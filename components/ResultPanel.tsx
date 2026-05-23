type Props = {
  output: string;
};

export default function ResultPanel({ output }: Props) {
  const copyPrompt = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  return (
    <aside className="result-panel">
      <h2>Generated Prompt</h2>

      <textarea
        readOnly
        value={output}
        placeholder="Your cinematic AI prompt will appear here..."
      />

      <button className="copy-btn" onClick={copyPrompt}>
        Copy Prompt
      </button>
    </aside>
  );
}
