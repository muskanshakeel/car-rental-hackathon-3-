// import * as React from "react";
// import { cn } from "@/lib/utils";

// const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
//   ({ className, ...props }, ref) => (
//     <input
//       ref={ref}
//       className={cn(
//         "flex h-10 w-full rounded-md border px-3 py-2 text-base placeholder-gray-400 focus-visible:ring-2",
//         className
//       )}
//       {...props}
//     />
//   )
// );
// Input.displayName = "Input";

// export { Input };


import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border px-3 py-2 text-base placeholder-gray-400 focus-visible:ring-2",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
