"use client";
import React, { createContext, useState, ReactNode } from 'react';


export const WC = createContext({});

const WorkoutContext = ({ children }: { children: ReactNode }) => {
  const [plan, setplan] = useState([]);
  const [Save, setSave] = useState([]);

  const sharedData = { plan, setplan, Save, setSave };

  return <WC.Provider value={sharedData}>{children}</WC.Provider>;
};

export default WorkoutContext;