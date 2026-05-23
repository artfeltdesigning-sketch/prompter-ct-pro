import { AppState } from "@/app/page";

type Props = {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  onGenerate: () => void;
  onClear: () => void;
};

const styles = [
  "Ultra Realistic Cinematic",
  "Luxury Commercial",
  "Dark Moody",
  "Bollywood Premium",
  "Architectural Hero"
];

const lightings = [
  "Morning Golden Sunlight",
  "Soft Studio",
  "Night Neon",
  "Sunset Glow"
];

const cameras = [
  "Hero Shot",
  "Drone Wide",
  "Close Up",
  "Low Angle",
  "Cinematic Orbit"
];

export default function PromptWorkspace({
  state,
  setState,
  onGenerate,
  onClear
}: Props) {
  return (
    <section className="workspace">
      <h2>Creative Director Workspace</h2>

      <div className="field">
        <label>Subject / Instruction</label>
        <textarea
          placeholder="Luxury villa with Indian security guard at gate..."
          value={state.subject}
          onChange={(e) =>
            setState({ ...state, subject: e.target.value })
          }
        />
      </div>

      <div className="field">
        <label>Style</label>
        <select
          value={state.style}
          onChange={(e) =>
            setState({ ...state, style: e.target.value })
          }
        >
          {styles.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label>Lighting</label>
        <select
          value={state.lighting}
          onChange={(e) =>
            setState({ ...state, lighting: e.target.value })
          }
        >
          {lightings.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label>Camera</label>
        <select
          value={state.camera}
          onChange={(e) =>
            setState({ ...state, camera: e.target.value })
          }
        >
          {cameras.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="actions">
        <button onClick={onGenerate}>Generate Prompt</button>
        <button onClick={onClear}>Clear</button>
      </div>
    </section>
  );
}
