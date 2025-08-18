import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";

const FramerImage = motion(Image);

const Programs = () => {
  const programs = [
    {
      title: "Journey to Belonging Home",
      ageRange: "Ages 5 to 17",
      summary: "A nurturing, culturally safe environment where Indigenous children and youth receive support to heal from trauma, develop life skills, and build a strong cultural identity.",
      keyPoints: [
        "24/7 supervision",
        "Personalized care and individualized healing plans",
        "Academic and vocational guidance",
        "Life skills training and financial literacy"
      ],
      fullDescription: "Our Journey to Belonging Home program provides a comprehensive, culturally safe environment for Indigenous children and youth aged 5 to 17. This program is designed to support healing from trauma while developing essential life skills and building a strong cultural identity. Each child receives personalized care with individualized healing plans that address their unique needs and circumstances. The program includes academic and vocational guidance to support educational success and future career planning. Additionally, we provide life skills training and financial literacy education to prepare youth for independent living.",
      image: "/images/programs/program11.jpeg",
      slug: "journey-to-belonging-home"
    },
    {
      title: "Early Care Haven",
      ageRange: "Ages 0 to 6",
      summary: "Providing a safe and supportive emergency home environment for our youngest children, with a strong emphasis on early development, attachment, health and wellness services, and support for family reintegration.",
      keyPoints: [
        "24/7 supervision",
        "Facilitates access to early developmental assessments",
        "Gentle routines that support security and growth",
        "Safe, supervised visits with biological family to preserve family bonds"
      ],
      fullDescription: "Early Care Haven is our specialized program for children aged 0 to 6, providing a safe and supportive emergency home environment. This program places a strong emphasis on early development, attachment, and health and wellness services. We understand the critical importance of early childhood development and work to support family reintegration whenever possible. Our approach includes facilitating access to early developmental assessments to ensure each child's needs are properly identified and addressed. We maintain gentle routines that support security and growth, creating a stable environment for our youngest children. The program also includes safe, supervised visits with biological family to preserve important family bonds and support reunification goals.",
      image: "/images/programs/program2hero.jpeg",
      slug: "early-care-haven"
    },
    {
      title: "Nurturing Mothers Program",
      ageRange: "Young Mothers",
      summary: "A culturally grounded program designed to support Indigenous young mothers in their journey toward healing, parenting, and personal growth.",
      keyPoints: [
        "24/7 supervision",
        "Culturally safe parenting mentorship",
        "Gentle routines that support security and growth",
        "Life skills development and self-care planning",
        "Focus on rebuilding stability for mother and child"
      ],
      fullDescription: "The Nurturing Mothers Program is a culturally grounded initiative designed specifically to support Indigenous young mothers in their journey toward healing, parenting, and personal growth. This program recognizes the unique challenges faced by young mothers and provides comprehensive support to help them build stable, nurturing environments for themselves and their children. Our approach includes culturally safe parenting mentorship that honors traditional Indigenous parenting practices while incorporating modern best practices. We provide gentle routines that support security and growth for both mother and child. The program focuses on life skills development and self-care planning, recognizing that a mother's well-being is essential to her child's development. Our ultimate goal is to help rebuild stability for both mother and child, creating lasting positive outcomes for families.",
      image: "/images/programs/program2.jpeg",
      slug: "nurturing-mothers"
    },
    {
      title: "Foster/Kinship Care Program",
      ageRange: "Coming Soon",
      summary: "A culturally safe foster care model that nurtures emotional well-being, strengthens identity, supports education, cultural connection, and ensures lasting stability.",
      keyPoints: [
        "Placement with culturally aware families",
        "Ongoing cultural awareness training for foster parents",
        "Access to Elders, community, and cultural activities",
        "Culturally guided reunification planning"
      ],
      fullDescription: "Our Foster/Kinship Care Program (Coming Soon) represents an innovative approach to culturally safe foster care that prioritizes emotional well-being, identity strengthening, and cultural connection. This program will place children with culturally aware families who understand and respect Indigenous traditions and values. We will provide ongoing cultural awareness training for foster parents to ensure they can effectively support the cultural needs of the children in their care. The program will facilitate access to Elders, community events, and cultural activities to maintain and strengthen cultural identity. Additionally, we will offer culturally guided reunification planning that respects traditional family structures and community relationships. This program aims to ensure lasting stability while preserving and celebrating cultural heritage.",
      image: "/images/programs/programkinship.jpeg",
      slug: "foster-kinship-care",
      comingSoon: true
    }
  ];

  return (
    <>
      <Head>
        <title>Our Programs | Pluming Eagle Lodge</title>
        <meta
          name="description"
          content="Discover our comprehensive programs supporting Indigenous children, youth, and families through culturally safe, trauma-informed care."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Our Programs"
            className="mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8"
          />
          
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {programs.map((program, index) => (
              <div key={index} className="col-span-12">
                <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4 h-[600px]">
                  <div className="w-full grid grid-cols-12 gap-8 lg:gap-4 h-full">
                    <div className="col-span-6 flex flex-col items-start justify-start lg:col-span-12 h-full">
                      <span className="inline-block text-lg font-medium text-primary dark:text-primaryDark lg:text-base md:text-sm">
                        {program.ageRange}
                      </span>
                      <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
                        {program.title}
                      </h2>
                      <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                        {program.summary}
                      </p>
                      
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {program.keyPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-sm text-dark/75 dark:text-light/75">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex items-center gap-4">
                        <Link
                          href={`/programs/${program.slug}`}
                          className="rounded-lg border-2 border-solid border-dark bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:bg-light hover:text-dark dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light lg:p-2 lg:px-4 lg:text-base"
                        >
                          Learn More
                        </Link>
                        <Link
                          href="/contact"
                          className="rounded-lg border-2 border-solid border-dark p-2.5 px-6 text-lg font-semibold capitalize text-dark hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark lg:p-2 lg:px-4 lg:text-base"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-6 relative rounded-lg overflow-hidden lg:col-span-12 h-full">
                      <FramerImage
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                        width={500}
                        height={300}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {program.comingSoon && (
                        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Programs; 