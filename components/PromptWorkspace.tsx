import { AppState } from "../app/page";

type Props = {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  onGenerate: () => void;
  onClear: () => void;
};

const cameraOptions = [
  "Hero Shot",
  "Drone",
  "Orbit",
  "Dolly In",
  "Tracking",
  "Close Up",
  "Low Angle"
];

const fxOptions = [
  "Volumetric Fog",
  "Dust Particles",
  "Light Rays",
  "Smoke",
  "Rain"
];

export default function PromptWorkspace({
  state,
  setState,
  onGenerate,
  onClear
}: Props) {
  const toggleCamera = (cam: string) => {
    const exists = state.cameras.includes(cam);
    setState({
      ...state,
      cameras: exists
        ? state.cameras.filter((c) => c !== cam)
        : [...state.cameras, cam]
    });
  };

  const toggleFx = (fx: string) => {
    const exists = state.fx.includes(fx);
    setState({
      ...state,
      fx: exists
        ? state.fx.filter((f) => f !== fx)
        : [...state.fx, fx]
    });
  };

  return (
    <main className="workspace">
      <h2>Creative Director Workspace</h2>

      <div className="field">
        <label>AI MODEL</label>
        <select
          value={state.model}
          onChange={(e) =>
            setState({ ...state, model: e.target.value })
          }
        >
          <option>Google Nano Banana 2</option>
          <option>Google Pro</option>
          <option>Kling</option>
          <option>Veo</option>
          <option>Sora</option>
        </select>
      </div>

      <div className="field">
        <label>MODE</label>
        <select
          value={state.mode}
          onChange={(e) =>
            setState({
              ...state,
              mode: e.target.value as "Image" | "Motion"
            })
          }
        >
          <option>Image</option>
          <option>Motion</option>
        </select>
      </div>

      <div className="field">
        <label>SUBJECT / SCENE</label>
        <input
          value={state.subject}
          onChange={(e) =>
            setState({ ...state, subject: e.target.value })
          }
          placeholder="Luxury villa, Indian guard at gate..."
        />
      </div>

      <div className="field">
        <label>CUSTOM INSTRUCTION</label>
        <textarea
          value={state.customInstruction}
          onChange={(e) =>
            setState({
              ...state,
              customInstruction: e.target.value
            })
          }
          placeholder="messy English allowed..."
        />
      </div>

      <div className="field">
        <label>CAMERA</label>
        <div className="chips">
          {cameraOptions.map((cam) => (
            <button
              key={cam}
              className={`chip ${
                state.cameras.includes(cam) ? "active" : ""
              }`}
              onClick={() => toggleCamera(cam)}
            >
              {cam}
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label>LIGHTING</label>
        <select
          value={state.lighting}
          onChange={(e) =>
            setState({ ...state, lighting: e.target.value })
          }
        >
          <option>Morning Golden Sunlight</option>
          <option>Sunset Orange</option>
          <option>Blue Hour</option>
          <option>Moonlight Cinematic</option>
        </select>
      </div>

      <div className="field">
        <label>COLOR GRADING</label>
        <select
          value={state.color}
          onChange={(e) =>
            setState({ ...state, color: e.target.value })
          }
        >
          <option>Realistic Natural</option>
          <option>Hollywood Blockbuster</option>
          <option>Netflix Cinematic</option>
          <option>Warm Luxury</option>
        </select>
      </div>

      <div className="field">
        <label>ENVIRONMENT FX</label>
        <div className="chips">
          {fxOptions.map((fx) => (
            <button
              key={fx}
              className={`chip ${
                state.fx.includes(fx) ? "active" : ""
              }`}
              onClick={() => toggleFx(fx)}
            >
              {fx}
            </button>
          ))}
        </div>
      </div>

      <div className="actions">
        <button onClick={onGenerate}>Generate Prompt</button>
        <button onClick={onClear}>Clear</button>
      </div>
    </main>
  );
}
