import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const UnderlinedText = ({ children, className }: Props) => {
  return (
    <span className={cn("underline underline-offset-4 decoration-dashed decoration-sky-400", className)}>
      {children}
    </span>
  );
};

export default UnderlinedText;
