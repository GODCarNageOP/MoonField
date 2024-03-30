import { Hero } from "@/components/HeroParallax";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
 <div className="home h-full">
<div className="hero py-24">
<Hero/>
<Stats/>
</div>
 </div>
  );
}
