"use client";

import type { AppState } from "../app/page";

type Props = {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  onGenerate: () => void;
  onClear: () => void;
};

const cameraOptions = [
  "Hero Shot",
  "Close Up",
  "Extreme Close Up",
  "Low Angle",
  "Drone Reveal",
  "FPV Flythrough",
  "Cinematic Orbit",
  "Tracking Shot",
  "Dolly In",
  "Crane Rise"
];

const lightingOptions = [
  "Morning Golden Sunlight",
  "Sunset Glow",
  "Blue Hour",
  "Night Neon",
  "Soft Studio",
  "Moody Cinematic"
];

const lutOptions = [
  "Hollywood Blockbuster",
  "Netflix Dark",
  "Luxury Commercial",
  "Dune LUT",
  "Blade Runner LUT",
  "Natural Premium"
];

const environmentOptions = [
  "Rain",
  "Fog",
  "Smoke",
  "Cloud Sky",
  "Storm",
  "Dust",
  "Snow",
  "Luxury Interior",
  "Realistic Sky"
];

export default function PromptWorkspace({
  state,
  setState,
  onGenerate,
  onClear
}: Props) {
  const toggleEnv = (item: string) => {
    const exists = state.environment.includes(item);

    setState({
      ...state,
      environment: exists
        ? state.environment.filter((x) => x !== item)
        : [...state.environment, item]
    });
  };

  return (
    <section className="workspace">
      <div className="workspace-header">
        <h1>Creative Director Workspace</h1>
        <p>AI decodes your idea into production-grade prompts.</p>
      </div>

      <div className="mode-switch">
        <button
          className={state.mode === "image" ? "active" : ""}
          onClick={() => setState({ ...state, mode: "image" })}
        >
          Image
        </button>

        <button
          className={state.mode === "motion" ? "active" : ""}
          onClick={() => setState({ ...state, mode: "motion" })}
        >
          Motion
        </button>
      </div>

      <div className="field">
        <label>SUBJECT / SCENE</label>
        <input
          value={state.subject}
          onChange={(e) =>
            setState({ ...state, subject: e.target.value })
          }
          placeholder="Luxury Ahmedabad villa..."
        />
      </div>

      <div className="field">
        <label>AI INSTRUCTION</label>
        <textarea
          value={state.instruction}
          onChange={(e) =>
            setState({ ...state, instruction: e.target.value })
          }
          placeholder="Any language. AI will decode intelligently."
        />
      </div>

      <div className="grid-3">
        <div className="field">
          <label>CAMERA</label>
          <select
            value={state.camera}
            onChange={(e) =>
              setState({ ...state, camera: e.target.value })
            }
          >
            {cameraOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>LIGHTING</label>
          <select
            value={state.lighting}
            onChange={(e) =>
              setState({ ...state, lighting: e.target.value })
            }
          >
            {lightingOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>COLOR LUT</label>
          <select
            value={state.lut}
            onChange={(e) =>
              setState({ ...state, lut: e.target.value })
            }
          >
            {lutOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label>ENVIRONMENT FX</label>
        <div className="chips">
          {environmentOptions.map((item) => (
            <button
              key={item}
              className={`chip ${
                state.environment.includes(item) ? "active" : ""
              }`}
              onClick={() => toggleEnv(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="actions">
        <button onClick={onGenerate}>Generate Prompt</button>
        <button onClick={onClear}>Clear</button>
      </div>
    </section>
  );
}
