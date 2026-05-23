type Props = {
  output: string;
};

export default function ResultPanel({ output }: Props) {
  const copyPrompt = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  const exportTxt = () => {
    if (!output) return;

    const blob = new Blob([output], {
      type: "text/plain"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "cinematic-prompt.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <aside className="result-panel">
      <h2>Final Prompt Output</h2>

      <textarea
        value={output}
        readOnly
        placeholder="Generated cinematic prompt will appear here..."
      />

      <div className="actions">
        <button onClick={copyPrompt}>Copy Prompt</button>
        <button onClick={exportTxt}>Export TXT</button>
      </div>
    </aside>
  );
}
