'use client'
import { WC } from '@/app/context/WorkoutContext';
import React, { useContext } from 'react';

const AddToPlanButton = ({ item }) => {
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