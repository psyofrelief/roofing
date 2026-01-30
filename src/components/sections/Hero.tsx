import { HERO_CARDS } from "@/lib/constants";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";
import HeroCard from "../HeroCard";

export default function Hero() {
  return (
    <Section
      className="min-h-screen-minus-navbar gap-y-md flex flex-col pt-0!"
      dark={true}
    >
      <div className="bg-popover flex-1 rounded" />
      <div className="flex w-full items-end justify-between">
        <Paragraph className="max-w-[1040px]">
          Roofing simplified. We’ve removed the typical contractor headaches to
          deliver a seamless, done for you experience from first inspection to
          final cleanup.
        </Paragraph>
        <p className="text-md underline">Get started</p>
      </div>
    </Section>
  );
}
