'use client'
import { WC } from '@/app/context/WorkoutContext';
import { Exercise } from '@/type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SaveButton = ({ item }: { item: Exercise }) => {
 const context = useContext(WC);

if (!context) {
  throw new Error("Component must be used within a WC.Provider");
}

const { plan, Save, setplan, setSave } = context;

  const handleSave = () => {
    setSave([...Save, item]);
     toast.success('Added succesfully on SAVED!')
  };

  return (
    <div>
      <button onClick={()=>handleSave()} className="btn btn-accent">Save</button>
    </div>
  );
};

export default SaveButton;