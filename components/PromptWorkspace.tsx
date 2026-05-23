"use client";

import { AppState } from "../app/page";

type Props = {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  onGenerate: () => void;
  onClear: () => void;
};

const imageCameras = [
  "Hero Shot",
  "Close Up",
  "Extreme Close Up",
  "Low Angle",
  "High Angle",
  "Wide Shot",
  "Ultra Wide",
  "Architectural Perspective",
  "Drone Top View",
  "Cinematic Orbit"
];

const motionCameras = [
  "Smooth Dolly Push",
  "Orbit Reveal",
  "FPV Flythrough",
  "Drone Pull Back",
  "Tracking Shot",
  "Crane Rise",
  "Parallax Move",
  "Steadicam Walk",
  "Gimbal Follow",
  "Helicopter Reveal"
];

const lightingOptions = [
  "Golden Hour Cinematic",
  "Soft Natural Daylight",
  "Netflix Moody",
  "Blue Hour",
  "Sunset Orange",
  "Luxury Interior Warm",
  "Overcast Editorial",
  "Night Neon",
  "Volumetric God Rays"
];

const lutOptions = [
  "Netflix Contrast",
  "Hollywood Blockbuster",
  "Apple Commercial",
  "Luxury Real Estate",
  "Kodak Film",
  "Teal Orange",
  "Dune LUT",
  "Blade Runner LUT"
];

const environmentOptions = [
  "Cloud Sky",
  "Rain",
  "Fog",
  "Smoke",
  "Storm",
  "Luxury Interior",
  "Modern Exterior",
  "Realistic Sky",
  "Sun Rays",
  "Dust Atmosphere"
];

export default function PromptWorkspace({
  state,
  setState,
  onGenerate,
  onClear
}: Props) {
  const toggleEnvironment = (env: string) => {
    const exists = state.environment.includes(env);

    setState({
      ...state,
      environment: exists
        ? state.environment.filter((item) => item !== env)
        : [...state.environment, env]
    });
  };

  const cameraList =
    state.mode === "image"
      ? imageCameras
      : motionCameras;

  return (
    <section className="workspace glass-panel">
      <div className="workspace-header">
        <h2>Creative Director Workspace</h2>
        <p>
          AI decodes messy instructions into
          production-grade prompts.
        </p>
      </div>

      <div className="field">
        <label>SUBJECT</label>
        <input
          value={state.subject}
          onChange={(e) =>
            setState({
              ...state,
              subject: e.target.value
            })
          }
          placeholder="Luxury Ahmedabad villa..."
        />
      </div>

      <div className="field">
        <label>AI INSTRUCTION (ANY LANGUAGE)</label>
        <textarea
          value={state.instruction}
          onChange={(e) =>
            setState({
              ...state,
              instruction: e.target.value
            })
          }
          placeholder="Gujarati / Hindi / English / Hinglish..."
        />
      </div>

      <div className="grid-3">
        <div className="field">
          <label>CAMERA</label>
          <select
            value={
              state.mode === "image"
                ? state.camera
                : state.motionCamera
            }
            onChange={(e) =>
              state.mode === "image"
                ? setState({
                    ...state,
                    camera: e.target.value
                  })
                : setState({
                    ...state,
                    motionCamera: e.target.value
                  })
            }
          >
            {cameraList.map((camera) => (
              <option key={camera}>{camera}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>LIGHTING</label>
          <select
            value={state.lighting}
            onChange={(e) =>
              setState({
                ...state,
                lighting: e.target.value
              })
            }
          >
            {lightingOptions.map((light) => (
              <option key={light}>{light}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>LUT</label>
          <select
            value={state.lut}
            onChange={(e) =>
              setState({
                ...state,
                lut: e.target.value
              })
            }
          >
            {lutOptions.map((lut) => (
              <option key={lut}>{lut}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label>ENVIRONMENT ENGINE</label>

        <div className="chip-grid">
          {environmentOptions.map((env) => (
            <button
              key={env}
              className={`chip ${
                state.environment.includes(env)
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                toggleEnvironment(env)
              }
            >
              {env}
            </button>
          ))}
        </div>
      </div>

      <div className="action-row">
        <button
          className="primary-btn"
          onClick={onGenerate}
        >
          Generate Prompt
        </button>

        <button
          className="secondary-btn"
          onClick={onClear}
        >
          Clear
        </button>
      </div>
    </section>
  );
}
