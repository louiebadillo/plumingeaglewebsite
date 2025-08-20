import { HireMe } from "@/components/HireMe";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import HeroFinal from "@/components/HeroFinal";
import FloatingLogo from "@/components/FloatingLogo";
import ProgramsOverview from "@/components/ProgramsOverview";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pluming Eagle Lodge - Empowering the Next Generation</title>
        <meta
          name="description"
          content="Pluming Eagle Lodge provides comprehensive child, youth, and family care services. Empowering the next generation through compassionate support and guidance."
        />
      </Head>

      <TransitionEffect />
      
      <FloatingLogo />
      
      {/* Hero Section */}
      <HeroFinal />
      
      {/* Programs Overview Section */}
      <ProgramsOverview />
      
      <HireMe />
    </>
  );
}
