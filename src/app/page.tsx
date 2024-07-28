import Hero from "@/sections/hero";
import Nav from "@/components/nav";
import PreloaderProvider from "@/context/preloader-context";
import PreLoader from "@/components/pre-loader";

export default function Home() {
  return (
    <PreloaderProvider>
      <main>
        <PreLoader />
        <Nav />
        <Hero />
      </main>
    </PreloaderProvider>
  );
}
