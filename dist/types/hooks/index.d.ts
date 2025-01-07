import { CardFlipperHandle } from "../types";
export declare const useCardFlipper: (id: string) => {
    toggleCardFlip: () => void;
    cardRef: import("react").RefObject<CardFlipperHandle | null>;
};
