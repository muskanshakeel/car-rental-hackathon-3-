// import * as React from "react";
// import { cn } from "@/lib/utils";

// const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => (
//     <div ref={ref} className={cn("rounded-lg border bg-card shadow-sm", className)} {...props} />
//   )
// );
// Card.displayName = "Card";

// const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => (
//     <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
//   )
// );
// CardHeader.displayName = "CardHeader";

// const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => (
//     <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
//   )
// );
// CardContent.displayName = "CardContent";

// const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => (
//     <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
//   )
// );
// CardDescription.displayName = "CardDescription";

// const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => (
//     <h2 ref={ref} className={cn("text-2xl font-semibold", className)} {...props} />
//   )
// );
// CardTitle.displayName = "CardTitle";

// const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => (
//     <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
//   )
// );
// CardFooter.displayName = "CardFooter";

// export {
//   Card,
//   CardHeader,
//   CardContent,
//   CardDescription,
//   CardTitle,
//   CardFooter,
// };


import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("rounded-lg border bg-card shadow-sm", className)} {...props} />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn("text-2xl font-semibold", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
