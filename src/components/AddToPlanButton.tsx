'use client'
import { WC } from '@/app/context/WorkoutContext';
import { Exercise } from '@/type';
import React, { useContext } from 'react';

const AddToPlanButton = ({ item }: { item: Exercise }) => {
  const { plan, setplan } = useContext(WC);

  const handleAddToPlan = () => {
    setplan([...plan, item]);
  };

  return (
    <div>
      <button onClick={()=>handleAddToPlan()}>Add to Plan</button>
    </div>
  );
};

export default AddToPlanButton;