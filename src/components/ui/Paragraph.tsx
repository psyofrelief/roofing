import { cn } from "@/lib/utils";

export default function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("text-lg leading-tight", className)}>{children}</p>;
}
