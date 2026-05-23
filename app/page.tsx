"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PromptWorkspace from "../components/PromptWorkspace";
import ResultPanel from "../components/ResultPanel";

export type PromptMode = "image" | "motion";

export type AppState = {
  mode: PromptMode;
  subject: string;
  instruction: string;
  camera: string;
  lighting: string;
  lut: string;
  environment: string[];
  output: string;
  decodedIntent: string;
};

const defaultState: AppState = {
  mode: "image",
  subject: "",
  instruction: "",
  camera: "Hero Shot",
  lighting: "Morning Golden Sunlight",
  lut: "Hollywood Blockbuster",
  environment: [],
  output: "",
  decodedIntent: ""
};

function decodeIntent(state: AppState) {
  return `AI understands: user wants a premium ${state.mode} cinematic creative with ${state.camera}, ${state.lighting}, ${state.lut} styling.`;
}

function buildPrompt(state: AppState) {
  const env =
    state.environment.length > 0
      ? state.environment.join(", ")
      : "clean cinematic environment";

  const motionBlock =
    state.mode === "motion"
      ? `
MOTION DIRECTOR:
buttery smooth motion,
realistic physics,
stable professional movement,
cinematic motion blur,
natural acceleration/deceleration,
camera choreography,
premium cinematic pacing
`
      : "";

  return `FINAL READY PROMPT ONLY:

Ultra realistic 8K HDR
Hollywood production quality
premium cinematic composition
volumetric lighting
hyper detailed textures
realistic shadows
atmospheric depth
zero cheap AI artifacts

SUBJECT:
${state.subject}

AI INTERPRETED INSTRUCTION:
${state.instruction}

CAMERA:
${state.camera}

LIGHTING:
${state.lighting}

COLOR LUT:
${state.lut}

ENVIRONMENT:
${env}

${motionBlock}

FINAL OUTPUT:
Create a premium cinematic ${state.mode} with blockbuster realism and production-grade quality.`;
}

export default function Home() {
  const [state, setState] = useState<AppState>(defaultState);

  const generate = () => {
    const decodedIntent = decodeIntent(state);
    const output = buildPrompt(state);

    setState({
      ...state,
      decodedIntent,
      output
    });
  };

  const clearAll = () => {
    setState(defaultState);
  };

  return (
    <main className="app-shell">
      <Sidebar />
      <PromptWorkspace
        state={state}
        setState={setState}
        onGenerate={generate}
        onClear={clearAll}
      />
      <ResultPanel state={state} />
    </main>
  );
}
