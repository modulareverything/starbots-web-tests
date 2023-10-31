"use client";

import { SquareCard } from "./SquareCard";
import { WideCard } from "./WideCard";

export function CardStack() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full mx-auto max-w-7xl">
      <WideCard />
      <SquareCard image="https://picsum.photos/seed/chrish/1000/1000" />
      <SquareCard image="https://picsum.photos/seed/meena/1000/1000" />
    </div>
  );
}
