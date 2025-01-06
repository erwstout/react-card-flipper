export interface ReactCardFlipperProps {
  id: string;
  back: React.ReactNode;
  behavior?: "click" | "hover";
  className?: string;
  front: React.ReactNode;
  height?: number | "auto";
  innerClassName?: string;
  innerStyle?: React.CSSProperties;
  levitate?: boolean;
  style?: React.CSSProperties;
  width?: number | "auto";
}

export interface ReactCardFlipperHandle {
  toggleFlip: () => void;
}
