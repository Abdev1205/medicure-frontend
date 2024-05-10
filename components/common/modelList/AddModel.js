import React, { useContext, useState } from 'react';
import { DataLayer } from '@/context/DataProvider';

const AddModel = () => {
  const { addModel } = useContext(DataLayer);
  const [modelName, setModelName] = useState('');
  const [modelDescription, setModelDescription] = useState('');

  const handleAddModel = () => {
    if (modelName && modelDescription) {
      // Create a new model object
      const newModel = { name: modelName, description: modelDescription };

      // Add the new model to the context
      addModel(newModel);

      // Clear the inputs
      setModelName('');
      setModelDescription('');
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <input
        type="text"
        placeholder="Model Name"
        value={modelName}
        onChange={(e) => setModelName(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Model Description"
        value={modelDescription}
        onChange={(e) => setModelDescription(e.target.value)}
        className="p-2 border rounded"
      />
      <button
        onClick={handleAddModel}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Model
      </button>
    </div>
  );
};

export default AddModel;
