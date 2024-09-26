"use client";
import { useEffect, useState } from "react";
import { AnimatedNumber } from "./AnimatedNumber";

export function AnimatedNumberBasic() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(2);
  }, []);

  return (
    <div class="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        className="mr-1 h-3 w-3 fill-transparent  stroke-[1.3] stroke-white dark:stroke-zinc-50"
      >
        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
      </svg>
      <AnimatedNumber
        className="font-mono font-light text-white "
        value={value}
      />
    </div>
  );
}
