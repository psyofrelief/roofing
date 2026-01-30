import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  dark?: boolean;
}

export default function Section({
  children,
  className = "",
  dark = true,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("bg-background py-xl px-md", !dark && "light", className)}
      {...props}
    >
      {children}
    </section>
  );
}
