
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import PhotoCarousel from "@/components/PhotoCarousel";
import ValuesCards from "@/components/ValuesCards";
import ImpactSection from "@/components/ImpactSection";
import { HireMe } from "@/components/HireMe";
import SmoothScroll from "@/components/SmoothScroll";





export default function About() {

  const carouselImages = [
    {
      src: "/images/programs/programkinship.jpeg",
      alt: "Pluming Eagle Lodge Facility",
      caption: "Community and engagement"
    },
    {
      src: "/images/programs/program14.jpeg", 
      alt: "Youth Activities",
      caption: "Engaging activities that promote growth and development"
    },
    {
      src: "/images/programs/program10.jpeg",
      alt: "Community Support",
      caption: "Safe and comfortable environment for children and youth"
    },
    {
      src: "/images/programs/program6.jpeg",
      alt: "Community Support",
      caption: "Our programs are designed to support the needs of the community"
    },
    {
      src: "/images/programs/program11.jpeg",
      alt: "Community Support",
      caption: "We provide a safe and supportive environment for children and youth"
    }
  ];

  return (
    <>
      <Head>
        <title>About Pluming Eagle Lodge</title>
        <meta
          name="description"
          content="Pluming Eagle Lodge, a non-institutional group home facility in Alberta, Canada"
        />
      </Head>

      <TransitionEffect />
      <SmoothScroll>
        <main
          className={`flex  w-full flex-col items-center justify-center dark:text-light`}
        >
          <Layout className="pt-16">
            <AnimatedText
              text="Helping Youth to Path of Independence"
              className="mt-12 mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-3xl xs:!text-2xl sm:mb-8 text-center"
            />

            {/* Photo Carousel Section - Full Width */}
            <div className="w-full mb-8 sm:mb-4">
              <PhotoCarousel images={carouselImages} />
            </div>
          </Layout>

          {/* About Us Section - Full Width */}
          <div className="w-full mb-16 sm:mb-8 px-4 sm:px-2">
            <h2 className="mb-8 text-4xl font-bold uppercase text-dark/75 dark:text-light/75 text-center md:text-3xl sm:text-2xl xs:text-xl">
              About Us
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl font-medium mb-6 leading-relaxed md:text-lg sm:text-base xs:text-sm">
                Founded in 2020 in Alberta, Canada, Pluming Eagle Lodge began as a dedicated non-institutional group home facility with the mission to provide a safe and supportive environment for children and youth in need. As we continued to support these young individuals, we saw their needs grow and evolve. In response, we expanded our programs to offer even greater support for their journey into adulthood.
              </p>
              <p className="text-xl font-medium leading-relaxed md:text-lg sm:text-base xs:text-sm">
                We are committed to providing necessary tools, guidance, and opportunities to empower children, youth, and families, ensuring they have the resources to lead independent, successful lives. Our growth is driven by a deep commitment to making a meaningful difference in the lives of those we serve, supporting their development, independence and connection to their communities.
              </p>
            </div>
          </div>

          {/* Full width ImpactSection right after About Us */}
          <ImpactSection />

          <Layout>
            <ValuesCards />
          </Layout>
        </main>
        
        <HireMe />
      </SmoothScroll>
    </>
  );
}
