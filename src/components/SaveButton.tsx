'use client'
import { WC } from '@/app/context/WorkoutContext';
import React, { useContext } from 'react';

const SaveButton = ({ item }) => {
  const { Save, setSave } = useContext(WC);

  const handleSave = () => {
    setSave([...Save, item]);
  };

  return (
    <div>
      <button onClick={()=>handleSave()}>Save</button>
    </div>
  );
};

export default SaveButton;