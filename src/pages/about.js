
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import PhotoCarousel from "@/components/PhotoCarousel";
import ValuesCards from "@/components/ValuesCards";
import { HireMe } from "@/components/HireMe";
import SmoothScroll from "@/components/SmoothScroll";


function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}



export default function About() {
  // Sample carousel images - you can replace these with your actual images
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
            className="mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-3xl xs:!text-2xl sm:mb-8"
          />

          {/* Photo Carousel Section - Full Width */}
          <div className="w-full mb-16 sm:mb-8">
            <PhotoCarousel images={carouselImages} />
          </div>

                    {/* About Us Section - Full Width */}
          <div className="w-full mb-16 sm:mb-8">
            <h2 className="mb-8 text-4xl font-bold uppercase text-dark/75 dark:text-light/75 text-center md:text-3xl sm:text-2xl xs:text-xl">
              About Us
            </h2>
            <div className="max-w-4xl mx-auto px-4 sm:px-2">
              <p className="text-xl font-medium mb-6 leading-relaxed md:text-lg sm:text-base xs:text-sm">
                Founded in 2020 in Alberta, Canada, Pluming Eagle Lodge began as a dedicated non-institutional group home facility with the mission to provide a safe and supportive environment for children and youth in need. As we continued to support these young individuals, we saw their needs grow and evolve. In response, we expanded our programs to offer even greater support for their journey into adulthood.
              </p>
              <p className="text-xl font-medium leading-relaxed md:text-lg sm:text-base xs:text-sm">
                We are committed to providing necessary tools, guidance, and opportunities to empower children, youth, and families, ensuring they have the resources to lead independent, successful lives. Our growth is driven by a deep commitment to making a meaningful difference in the lives of those we serve, supporting their development, independence and connection to their communities.
              </p>
            </div>
          </div>

          {/* Counters Section - Under About Us */}
          <div className="w-full mb-16 sm:mb-8">
            <div className="grid w-full grid-cols-3 gap-8 sm:grid-cols-1 sm:gap-6">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl mb-4">
                  <AnimatedNumberFramerMotion value={1688} />+
                </span>
                <h3 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-lg sm:text-base xs:text-sm">
                  Days of Continuous Service
                </h3>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl mb-4">
                  <AnimatedNumberFramerMotion value={300} />
                </span>
                <h3 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-lg sm:text-base xs:text-sm">
                  Youths Supported
                </h3>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl mb-4">
                  <AnimatedNumberFramerMotion value={250} />+
                </span>
                <h3 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-lg sm:text-base xs:text-sm">
                  Families Supported
                </h3>
              </div>
            </div>
          </div>

          <ValuesCards />

          {/* Add bottom margin to prevent footer overlap */}
          <div className="mb-48 sm:mb-32"></div>
          
        </Layout>
        </main>
        <HireMe />
      </SmoothScroll>
    </>
  );
}
