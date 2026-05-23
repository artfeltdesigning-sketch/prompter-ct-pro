export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">PROMPTER CT PRO</div>
      <div className="subtitle">AI Creator MVP</div>

      <div className="nav">
        <button className="nav-btn active">Prompt Generator</button>
        <button className="nav-btn">Image AI</button>
        <button className="nav-btn">Motion AI</button>
        <button className="nav-btn">Templates</button>
      </div>
    </aside>
  );
}
