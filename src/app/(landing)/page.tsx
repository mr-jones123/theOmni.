import { Button } from "@/components/ui/button";
import Link from "next/link";
export const metadata = {
  title: "Omni.",
  description: "A chatbot that boosts productivity"
}
export default function Home() {
  return (
    <> 
       <Button>
        <Link href={"/about-us"}>About us</Link>
       </Button>
    </>
  );
}
