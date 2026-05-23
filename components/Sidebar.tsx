import { AppState } from "../app/page";

type Props = {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
};

const imageStyles = [
  "Ultra Realistic Cinematic",
  "Luxury Commercial",
  "Architectural Editorial",
  "Hollywood Blockbuster",
  "Netflix Prestige",
  "Fashion Editorial",
  "Apple Commercial",
];

const motionStyles = [
  "Hollywood Motion",
  "Commercial Ad Motion",
  "Luxury Real Estate Motion",
  "Cinematic Action Motion",
  "Smooth Documentary Motion",
];

export default function Sidebar({ state, setState }: Props) {
  const styles =
    state.mode === "image" ? imageStyles : motionStyles;

  return (
    <aside className="sidebar glass-panel">
      <div className="brand-block">
        <h1>PROMPTER CT PRO</h1>
        <p>AI Creative Director OS</p>
      </div>

      <div className="mode-switch">
        <button
          className={state.mode === "image" ? "active" : ""}
          onClick={() =>
            setState({ ...state, mode: "image" })
          }
        >
          IMAGE AI
        </button>

        <button
          className={state.mode === "motion" ? "active" : ""}
          onClick={() =>
            setState({ ...state, mode: "motion" })
          }
        >
          MOTION AI
        </button>
      </div>

      <div className="sidebar-section">
        <label>Creative Style</label>

        <select
          value={state.style}
          onChange={(e) =>
            setState({
              ...state,
              style: e.target.value,
            })
          }
        >
          {styles.map((style) => (
            <option key={style}>{style}</option>
          ))}
        </select>
      </div>

      <div className="sidebar-info">
        <div>AI Brain: ACTIVE</div>
        <div>Multi-language Decode: ENABLED</div>
        <div>Trend Intelligence: ENABLED</div>
      </div>
    </aside>
  );
}
