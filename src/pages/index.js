import { HireMe } from "@/components/HireMe";
import BackgroundSection from "@/components/BackgroundSection";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import HeroFinal from "@/components/HeroFinal";
import ProgramsOverview from "@/components/ProgramsOverview";
import TestimonialSlider from "@/components/TestimonialSlider";

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
            
      {/* Hero Section */}
      <HeroFinal />
      
      {/* Programs Overview Section */}
      <ProgramsOverview />
      
      {/* Testimonial Slider Section */}
      <TestimonialSlider />
      
      {/* Homepage CTA above footer */}
      <BackgroundSection>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-700 mb-8">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us in our mission to support Indigenous children, youth, and families. 
            Together, we can create lasting positive change in our communities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/programs" 
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Our Programs
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </BackgroundSection>

      <HireMe />
    </>
  );
}
