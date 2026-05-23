"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PromptWorkspace from "../components/PromptWorkspace";
import ResultPanel from "../components/ResultPanel";

export type AppState = {
  model: string;
  mode: "Image" | "Motion";
  subject: string;
  customInstruction: string;
  lighting: string;
  color: string;
  fx: string[];
  cameras: string[];
  output: string;
};

const defaultState: AppState = {
  model: "Google Nano Banana 2",
  mode: "Image",
  subject: "",
  customInstruction: "",
  lighting: "Morning Golden Sunlight",
  color: "Realistic Natural",
  fx: [],
  cameras: [],
  output: ""
};

function buildPrompt(state: AppState) {
  const fxText = state.fx.length ? state.fx.join(", ") : "None";
  const camText = state.cameras.length
    ? state.cameras.join(", ")
    : "Auto Cinematic Camera";

  const motionBlock =
    state.mode === "Motion"
      ? `
buttery smooth motion,
realistic physics,
cinematic motion blur,
natural acceleration/deceleration,
stable professional camera movement,
film-grade motion pacing,`
      : "";

  return `FINAL READY PROMPT ONLY:

Ultra realistic 8K HDR, Hollywood production quality, premium cinematic composition, realistic shadows, volumetric lighting, atmospheric depth, ultra sharp textures, realistic reflections, blockbuster visual language.

SUBJECT:
${state.subject || "Custom cinematic subject"}

CUSTOM INSTRUCTION:
${state.customInstruction || "Professionally interpreted cinematic direction"}

MODEL:
${state.model}

MODE:
${state.mode}

CAMERA:
${camText}

LIGHTING:
${state.lighting}

COLOR GRADING:
${state.color}

ENVIRONMENT FX:
${fxText}

${motionBlock}

FINAL OUTPUT:
Create a premium ${state.mode.toLowerCase()} with maximum realism, perfect composition, zero cheap AI artifacts, cinematic storytelling depth, professional commercial quality.`;
}

export default function Home() {
  const [state, setState] = useState<AppState>(defaultState);

  const generatePrompt = () => {
    const output = buildPrompt(state);
    setState({ ...state, output });
  };

  const clearAll = () => {
    setState(defaultState);
  };

  return (
    <div className="app-shell">
      <Sidebar />
      <PromptWorkspace
        state={state}
        setState={setState}
        onGenerate={generatePrompt}
        onClear={clearAll}
      />
      <ResultPanel output={state.output} />
    </div>
  );
}
