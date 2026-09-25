"use client";
import React, { useContext, useState } from 'react';
import { WC } from '../context/WorkoutContext';
import Image from 'next/image';
import Link from 'next/link';
import { Exercise } from '@/type';
import { toast } from 'react-toastify';

type SortKey = "duration" | "caloriesBurned" | "rating";

const PlansPage = () => {
  const context = useContext(WC);

  

  const { plan, Save, setplan, setSave } = context;
  const [sortBy, setSortBy] = useState<SortKey>("duration");

  const totalMinutes = plan.reduce((sum, ex) => sum + ex.duration, 0);
  const totalCalories = plan.reduce((sum, ex) => sum + ex.caloriesBurned, 0);

  const sortExercises = (list: Exercise[]): Exercise[] => {
    return [...list].sort((a, b) => b[sortBy] - a[sortBy]);
  };

  const sortedPlan = sortExercises(plan);
  const sortedSave = sortExercises(Save);

  const markAsDone = (id: number) => {
    setplan(plan.filter((p: Exercise) => p.id !== id));
    toast.success('Done!')
  };

  return (
    <div className="bg-black text-white p-6 container mx-auto min-h-screen">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex justify-between">
        <div>
          <p className="text-xs text-gray-400">Exercises</p>
          <p className="text-2xl font-bold text-lime-400">{plan.length}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Minutes</p>
          <p className="text-2xl font-bold">{totalMinutes}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Calories</p>
          <p className="text-2xl font-bold">{totalCalories}</p>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortKey)}
          className="select bg-zinc-900 border-zinc-700 text-white"
        >
          <option value="duration">Duration</option>
          <option value="caloriesBurned">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="tabs tabs-lift mt-4">
        <input
          type="radio"
          name="plan_tabs"
          className="tab bg-black text-white"
          aria-label="Today's Plan"
          defaultChecked
        />
        <div className="tab-content bg-black border-zinc-800 p-6">
          <div className="space-y-3">
            {sortedPlan.map((ex: Exercise) => (
              <div
                key={ex.id}
                className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4"
              >
                <Image
                  src={ex.image}
                  alt={ex.name}
                  width={64}
                  height={64}
                  className="rounded-lg object-cover w-16 h-16"
                />

                <div className="flex-1">
                  <p className="font-bold uppercase text-sm">{ex.name}</p>
                  <p className="text-xs text-gray-400">{ex.equipment}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-300 mt-1">
                    <span>🕒 {ex.duration} min</span>
                    <span>🔥 {ex.caloriesBurned} kcal</span>
                    <span>⭐ {ex.rating}</span>
                  </div>
                </div>

                <button className="btn btn-sm btn-outline border-zinc-600 text-white">
                  <Link href={`/workout/${ex.id}`}>View Details</Link>
                </button>
                <button
                  onClick={() => markAsDone(ex.id)}
                  className="btn btn-sm bg-lime-400 hover:bg-lime-300 text-black border-none"
                >
                  ✓ Mark as Done
                </button>
                <button
                  onClick={() => setplan(plan.filter((p: Exercise) => p.id !== ex.id))}
                  className="text-gray-400 hover:text-red-400 px-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <input type="radio" name="plan_tabs" className="tab bg-black text-white" aria-label="Saved" />
        <div className="tab-content bg-black border-zinc-800 p-6">
          <div className="space-y-3">
            {sortedSave.map((ex: Exercise) => (
              <div
                key={ex.id}
                className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4"
              >
                <Image
                  src={ex.image}
                  alt={ex.name}
                  width={64}
                  height={64}
                  className="rounded-lg object-cover w-16 h-16"
                />

                <div className="flex-1">
                  <p className="font-bold uppercase text-sm">{ex.name}</p>
                  <p className="text-xs text-gray-400">{ex.equipment}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-300 mt-1">
                    <span>🕒 {ex.duration} min</span>
                    <span>🔥 {ex.caloriesBurned} kcal</span>
                    <span>⭐ {ex.rating}</span>
                  </div>
                </div>

                <button className="btn btn-sm btn-outline border-zinc-600 text-white">
                  <Link href={`/workout/${ex.id}`}>View Details</Link>
                </button>
                <button
                  onClick={() => setSave(Save.filter((p: Exercise) => p.id !== ex.id))}
                  className="text-gray-400 hover:text-red-400 px-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;