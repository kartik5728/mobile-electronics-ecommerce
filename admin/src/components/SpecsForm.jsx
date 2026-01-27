import { use, useState } from "react";
import { DeleteIcon } from "./icons/exports";

export default function SpecsForm({ productSpecs={} }) {
  const [productKey, setProductKey] = useState("");
  const [productValue, setProductValue] = useState("");
  const [specs, setSpecs] = useState([{ 
    id: Date.now(),
    key: "",
    value: ""
  }]);

  const addSpec = (e) => {
    e.preventDefault();
    // setProductKey(productKey);
    // setProductValue(productValue);
    const tempKey = productKey;
    const tempValue = productValue;
    setSpecs([...specs, { id: Date.now(), key: tempKey, value: tempValue }]);
    setProductKey("");
    setProductValue("");
  };

  const removeSpec = (id) => {
    if(specs.length > 1) {
        setSpecs(specs.filter(spec => spec.id !== id));
    }
  };

  return (
    <div>
      {/* Parent element */}
      <div className="flex flex-col gap-2">
        {specs.map(spec => (
          <div key={spec.id} className="flex flex-row gap-2">
            <input
              onChange={(e) => setProductKey(e.target.value)}
              value={productKey}
              className="form1-input w-32 sm:w-[50%]"
              type="text"
              placeholder="key"
              required
            />
            <input
              onChange={(e) => setProductValue(e.target.value)}
              value={productValue}
              className="form1-input w-32 sm:w-[50%]"
              type="text"
              placeholder="value"
              required
            />
            <button
              type="button"
              onClick={() => removeSpec(spec.id)}
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
