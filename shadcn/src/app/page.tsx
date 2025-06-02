import { Button } from "@/components/ui/button";
import { Blocks, Atom } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button size="xl" className="rounded-full">
        <Blocks /> Click me <Atom />
      </Button>
    </div>
  );
}
