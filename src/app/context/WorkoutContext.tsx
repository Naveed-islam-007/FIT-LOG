"use client";
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { Exercise } from '@/type';

type WorkoutContextType = {
  plan: Exercise[];
  setplan: Dispatch<SetStateAction<Exercise[]>>;
  Save: Exercise[];
  setSave: Dispatch<SetStateAction<Exercise[]>>;
};

export const WC = createContext<WorkoutContextType | undefined>(undefined);

const WorkoutContext = ({ children }: { children: ReactNode }) => {
  const [plan, setplan] = useState<Exercise[]>([]);
  const [Save, setSave] = useState<Exercise[]>([]);

  const sharedData: WorkoutContextType = { plan, setplan, Save, setSave };

  return <WC.Provider value={sharedData}>{children}</WC.Provider>;
};

export default WorkoutContext;