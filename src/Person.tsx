import { useState } from "react";

interface Person {
  name: string;
  age?: number;
  isActive: boolean;
  country?: string;
}

export default function Person({
  name,
  age,
  isActive,
  country = "India",
}: Person) {
  const [desc, setDesc] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };
  return (
    <div>
      {isActive&&
        (<>
          <p>{name}</p>
          <p>{age}</p>
          <p>{country}</p>
          <p>{desc && desc}</p>
          <input onChange={(e) => handleChange(e)} />
        </>)
      }
    </div>
  );
}
