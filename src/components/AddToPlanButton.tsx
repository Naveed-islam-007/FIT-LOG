"use client";

import { Exercise } from "@/type";
import { useState } from "react";


const AddToPlanButton = ({ item }: { item: Exercise }) => {
  const [added, setAdded] = useState(false);

  return (
    <button
      onClick={() => setAdded(!added)}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        added
          ? "bg-neutral-800 text-white"
          : "bg-lime-400 text-black hover:bg-lime-300"
      }`}
    >
      📅 {added ? "Added to plan" : "Add to today's plan"}
    </button>
  );
};

export default AddToPlanButton;