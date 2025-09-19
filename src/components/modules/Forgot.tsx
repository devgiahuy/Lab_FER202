import { Checkbox, Link } from "@heroui/react";
import { useState } from "react";
 
export default function Forgot() {
    const [isSelected, setIsSelected] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center w-110 mt-0 ml-7">
        <div className="flex flex-col gap-2">
          <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
            Remember me
          </Checkbox>
        </div>
        <div>
          <Link>Forgot Password</Link>
        </div>
      </div>
    </div>
  );
}
