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
  style: string;
  camera: string;
  motionCamera: string;
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
  style: "Ultra Realistic Cinematic",
  camera: "Hero Shot",
  motionCamera: "Smooth Dolly Push",
  lighting: "Golden Hour Cinematic",
  lut: "Netflix Contrast",
  environment: [],
  output: "",
  decodedIntent: "",
};

function decodeIntent(state: AppState) {
  return `AI understands user wants: ${state.subject}. Instruction intent decoded with cinematic intelligence.`;
}

function buildPrompt(state: AppState) {
  const env = state.environment.length
    ? state.environment.join(", ")
    : "Natural cinematic environment";

  if (state.mode === "motion") {
    return `FINAL READY MOTION PROMPT ONLY:

AI CREATIVE DIRECTOR INTELLIGENCE:
${state.decodedIntent}

MODE:
Motion AI

SUBJECT:
${state.subject}

USER INSTRUCTION:
${state.instruction}

STYLE:
${state.style}

CAMERA:
${state.motionCamera}

LIGHTING:
${state.lighting}

COLOR LUT:
${state.lut}

ENVIRONMENT:
${env}

MOTION ENGINE:
Buttery smooth cinematic motion,
realistic motion physics,
natural acceleration and deceleration,
professional stabilized camera movement,
premium Hollywood pacing,
realistic environmental interaction,
commercial-grade cinematic choreography.

FINAL OUTPUT:
Generate premium blockbuster realistic cinematic motion output with zero cheap AI artifacts.`;
  }

  return `FINAL READY IMAGE PROMPT ONLY:

AI CREATIVE DIRECTOR INTELLIGENCE:
${state.decodedIntent}

MODE:
Image AI

SUBJECT:
${state.subject}

USER INSTRUCTION:
${state.instruction}

STYLE:
${state.style}

CAMERA:
${state.camera}

LIGHTING:
${state.lighting}

COLOR LUT:
${state.lut}

ENVIRONMENT:
${env}

FINAL OUTPUT:
Generate premium ultra realistic cinematic visual with Hollywood composition, blockbuster realism, perfect depth, luxury commercial quality, zero cheap AI artifacts.`;
}

export default function Home() {
  const [state, setState] = useState<AppState>(defaultState);

  const generatePrompt = () => {
    const decoded = decodeIntent(state);
    const updated = { ...state, decodedIntent: decoded };
    const output = buildPrompt(updated);

    setState({
      ...updated,
      output,
    });
  };

  const clearAll = () => {
    setState(defaultState);
  };

  return (
    <main className="app-shell">
      <Sidebar state={state} setState={setState} />

      <PromptWorkspace
        state={state}
        setState={setState}
        onGenerate={generatePrompt}
        onClear={clearAll}
      />

      <ResultPanel output={state.output} />
    </main>
  );
}
