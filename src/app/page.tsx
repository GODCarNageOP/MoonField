import { BentoGridThirdDemo } from "@/components/BentoGrid";
import {Hero} from "@/components/Hero";
import { BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";

export default function Home() {
  return (
 <div className="home h-screen  flex item-center justify-center">
 <div className="flex relative top-42">
  <h2 className="text-6xl">Hello  </h2>

  <BentoGridThirdDemo/>

 </div>
 </div>
  );
}
