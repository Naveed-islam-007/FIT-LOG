'use client'
import { WC } from '@/app/context/WorkoutContext';
import { Exercise } from '@/type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const AddToPlanButton = ({ item }: { item: Exercise }) => {
 const context = useContext(WC);

if (!context) {
  throw new Error("Component must be used within a WC.Provider");
}

const { plan, Save, setplan, setSave } = context;
  const handleAddToPlan = () => {
    setplan([...plan, item]);
    toast.success('Added succesfully on plan!')
  };

  return (
    <div>
      <button onClick={()=>handleAddToPlan()} className='btn btn-error'>Add to Plan</button>
    </div>
  );
};

export default AddToPlanButton;