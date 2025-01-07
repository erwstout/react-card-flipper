import { useRef } from "react";
import { CardFlipperHandle } from "../types";

export const useCardFlipper = (id: string) => {
  const cardRef = useRef<CardFlipperHandle | null>(null);

  const toggleCardFlip = () => {
    const cardElement = document.getElementById(id);
    if (cardElement && cardRef.current) {
      cardRef.current.toggleFlip();
    }
  };

  return { toggleCardFlip, cardRef };
};
