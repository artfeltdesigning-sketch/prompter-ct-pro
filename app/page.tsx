"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PromptWorkspace from "../components/PromptWorkspace";
import ResultPanel from "../components/ResultPanel";

export type AppState = {
  subject: string;
  style: string;
  lighting: string;
  camera: string;
  output: string;
};

const defaultState: AppState = {
  subject: "",
  style: "Ultra Realistic Cinematic",
  lighting: "Morning Golden Sunlight",
  camera: "Hero Shot",
  output: ""
};

function buildPrompt(state: AppState) {
  return `FINAL READY PROMPT ONLY:

Ultra realistic 8K HDR, Hollywood production quality, premium cinematic composition, realistic shadows, volumetric lighting, atmospheric depth, hyper detailed textures.

SUBJECT:
${state.subject || "Custom cinematic subject"}

STYLE:
${state.style}

LIGHTING:
${state.lighting}

CAMERA:
${state.camera}

FINAL OUTPUT:
Create a premium cinematic AI visual with blockbuster realism, zero cheap AI artifacts, professional composition and commercial quality.`;
}

export default function Home() {
  const [state, setState] = useState<AppState>(defaultState);

  const generatePrompt = () => {
    setState({
      ...state,
      output: buildPrompt(state)
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
        onGenerate={generatePrompt}
        onClear={clearAll}
      />
      <ResultPanel output={state.output} />
    </main>
  );
}
