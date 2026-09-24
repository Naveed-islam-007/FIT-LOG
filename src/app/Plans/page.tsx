"use client";
import React, { useContext } from 'react';
import { WC } from '../context/WorkoutContext';
import Image from 'next/image';

const PlanPage = () => {
  const { plan, Save,setplan,setSave } = useContext(WC);

  const removeFromPlan = (id: number) => {
    setplan(plan.filter((ex) => ex.id !== id));
  };

  if (plan.length === 0) {
    return (
      <div className="container mx-auto px-4 py-10 text-center text-neutral-400">
        Your workout plan is empty.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold text-white">Your Plan</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {plan.map((exercise) => (
          <div
            key={exercise.id}
            className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900"
          >
            <div className="relative h-40 w-full">
              <Image
                src={exercise.image}
                alt={exercise.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-white">{exercise.name}</h2>
              <p className="text-sm text-neutral-400">{exercise.equipment}</p>
              <button
                onClick={() => removeFromPlan(exercise.id)}
                className="btn btn-sm mt-3 border-none bg-red-500 text-white"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanPage;