"use client";

import type { AppState } from "../app/page";

type Props = {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  onGenerate: () => void;
  onClear: () => void;
};

export default function PromptWorkspace({
  state,
  setState,
  onGenerate,
  onClear
}: Props) {
  return (
    <main className="workspace">
      <div className="card">
        <h2>Creative Director Workspace</h2>

        <input
          placeholder="Subject"
          value={state.subject}
          onChange={(e) =>
            setState({ ...state, subject: e.target.value })
          }
        />

        <textarea
          placeholder="Custom cinematic instruction..."
          value={state.customInstruction}
          onChange={(e) =>
            setState({
              ...state,
              customInstruction: e.target.value
            })
          }
        />

        <div className="row">
          <select
            value={state.model}
            onChange={(e) =>
              setState({ ...state, model: e.target.value })
            }
          >
            <option>Google Nano Banana 2</option>
            <option>GPT Image</option>
            <option>Runway Gen 4</option>
          </select>

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

        <input
          placeholder="Lighting"
          value={state.lighting}
          onChange={(e) =>
            setState({ ...state, lighting: e.target.value })
          }
        />

        <input
          placeholder="Color grading"
          value={state.color}
          onChange={(e) =>
            setState({ ...state, color: e.target.value })
          }
        />

        <input
          placeholder="FX (comma separated)"
          onChange={(e) =>
            setState({
              ...state,
              fx: e.target.value
                .split(",")
                .map((x) => x.trim())
                .filter(Boolean)
            })
          }
        />

        <input
          placeholder="Cameras (comma separated)"
          onChange={(e) =>
            setState({
              ...state,
              cameras: e.target.value
                .split(",")
                .map((x) => x.trim())
                .filter(Boolean)
            })
          }
        />

        <div className="button-row">
          <button onClick={onGenerate}>Generate</button>
          <button onClick={onClear}>Clear</button>
        </div>
      </div>
    </main>
  );
}
