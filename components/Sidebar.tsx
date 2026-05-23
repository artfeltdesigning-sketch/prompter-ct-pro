export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <h1 className="brand">PROMPTER CT PRO</h1>
        <p className="subtitle">AI Creator Studio V2</p>
      </div>

      <nav className="nav">
        <button className="nav-btn active">Prompt Builder</button>
        <button className="nav-btn">Presets</button>
        <button className="nav-btn">AI Models</button>
        <button className="nav-btn">Reference Director</button>
        <button className="nav-btn">Motion Engine</button>
        <button className="nav-btn">Export</button>
      </nav>
    </aside>
  );
}
