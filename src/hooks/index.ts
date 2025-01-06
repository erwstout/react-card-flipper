import { useRef } from "react";
import { ReactCardFlipperHandle } from "../types";

export const useCardFlipper = (id: string) => {
  const cardRef = useRef<ReactCardFlipperHandle | null>(null);

  const toggleCardFlip = () => {
    const cardElement = document.getElementById(id);
    if (cardElement && cardRef.current) {
      cardRef.current.toggleFlip();
    }
  };

  return { toggleCardFlip, cardRef };
};
