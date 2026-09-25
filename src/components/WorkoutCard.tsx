import { Exercise } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const WorkoutCard = ({ item }: { item: Exercise }) => {
  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={item.image} alt={item.name} width={400} height={192} className="h-full w-full object-cover" />
        <div className="absolute top-3 left-3 flex gap-2">
          {item.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase px-2 py-1 rounded bg-lime-400 text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white font-bold uppercase tracking-wide">{item.name}</h3>
        <p className="text-slate-400 text-xs mb-3">{item.equipment}</p>

        <div className="flex items-center gap-4 text-xs text-slate-300">
          <span>⏱ {item.duration} min</span>
          <span>🔥 {item.caloriesBurned} kcal</span>
          <span>⭐ {item.rating}</span>
          <Link href={`/workout/${item.id}`} className='btn btn-primary'>Details</Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;