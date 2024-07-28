import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="font-main flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-black">Oops, that&apos; a 404!</h1>
        <Button size="sm">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
