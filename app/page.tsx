import Sidebar from "@/components/Sidebar";
import PromptWorkspace from "@/components/PromptWorkspace";
import ResultPanel from "@/components/ResultPanel";

export default function Home() {
  return (
    <main className="studio-shell">
      <Sidebar />
      <PromptWorkspace />
      <ResultPanel />
    </main>
  );
}