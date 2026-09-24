import React from 'react';

import WorkoutCard from './WorkoutCard';
import { Exercise } from '@/type';

const getContent = async (): Promise<Exercise[]> => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  return data;
};

const Contents = async () => {
  const conData = await getContent();

  return (
    <div className="container mx-auto my-[70px] px-4">
      <div className="mb-10">
        <p className="text-2xl font-bold uppercase tracking-widest text-white">
          The library
        </p>
        <h2 className="text-sm font-bold text-slate-400">
          Twelve lifts covering every muscle group
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {conData.map((item) => (
          <WorkoutCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Contents;