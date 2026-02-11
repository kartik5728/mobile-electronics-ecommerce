import { useEffect, useState } from "react";
import { DeleteIcon } from "./icons/exports";

export default function SpecsForm({ onSpecsArrayChange }) {
  const [productKey, setProductKey] = useState("");
  const [productValue, setProductValue] = useState("");
  const [specs, setSpecs] = useState([['', '']]);

  const addSpec = (e) => {
    e.preventDefault();
    let tempSpecs = structuredClone(specs);
    tempSpecs = [...tempSpecs, ['', '']];
    // console.log(tempSpecs);
    setSpecs(tempSpecs);
  };

  useEffect(() => {
    // console.log("Specs changed:", specs);
    onSpecsArrayChange(specs)
  }, [specs]);

  const removeSpec = (id) => {
    setSpecs(prev => prev.filter((item, index) => (index !== id)));
  };

  return (
    <div>
      {/* Parent element */}
      <div className="flex flex-col gap-2">
        {specs.map((spec, index) => (
          <div key={index} className="flex flex-row gap-2">
            <input
              
              value={spec[0]}
        className="form1-input w-32 sm:w-[50%]"
        type="text"
        placeholder="key"
        required
        onChange={(e) => {
          const newSpecs = [...specs];
          newSpecs[index][0] = e.target.value;
          setSpecs(newSpecs);
        }}
            />
            <input
              
              value={spec[1]}
        className="form1-input w-32 sm:w-[50%]"
        type="text"
        placeholder="key"
        required
        onChange={(e) => {
          const newSpecs = [...specs];
          newSpecs[index][1] = e.target.value;
          setSpecs(newSpecs);
        }}
            />
            <button
              type="button"
              onClick={() => removeSpec(index)}
              className="px-2 cursor-pointer lg:px-4 py-2 bg-red-400 hover:bg-red-500 text-white rounded-lg"
            >
              <DeleteIcon size={12} />
            </button>
          </div>
        ))}
      </div>

      {/* Append trigger */}
      <button
        type="button"
        onClick={addSpec}
        className="cursor-pointer mt-4 px-4 py-2 text-sm bg-[#635bff] hover:bg-[#4d45e2] text-white rounded-lg"
      >
        Add +
      </button>
    </div>
  );
}
