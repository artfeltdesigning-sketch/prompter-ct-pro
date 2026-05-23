import {
  Sparkles,
  ImageIcon,
  Clapperboard,
  Camera,
  Sun,
  Cloud,
  Settings
} from "lucide-react";

const items = [
  { icon: Sparkles, label: "AI Brain" },
  { icon: ImageIcon, label: "Image Studio" },
  { icon: Clapperboard, label: "Motion Studio" },
  { icon: Camera, label: "Camera Engine" },
  { icon: Sun, label: "Lighting Lab" },
  { icon: Cloud, label: "Environment FX" },
  { icon: Settings, label: "Settings" }
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="brand">PROMPTER CT PRO</div>
        <div className="subtitle">AI Creative OS 2026</div>
      </div>

      <div className="nav">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button key={item.label} className="nav-btn">
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
