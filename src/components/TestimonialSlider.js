import React, { useState, useEffect } from 'react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent",
      content: "Pluming Eagle Lodge has been a blessing for our family. The cultural programs and trauma-informed care have helped my children heal and reconnect with their identity. The staff truly understands our needs.",

    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Community Partner",
      content: "The work Pluming Eagle Lodge does is transformative. Their commitment to cultural safety and holistic care sets a new standard for supporting Indigenous families. I've seen incredible positive changes in the children they serve.",avatar: "/images/profile/Riley.png"
    },
    {
      id: 3,
      name: "Elder Grace Williams",
      role: "Cultural Advisor",
      content: "As an Elder working with Pluming Eagle Lodge, I've witnessed the deep respect they have for traditional ways. They create spaces where our children can learn, grow, and embrace their cultural heritage with pride.",

    },
    {
      id: 4,
      name: "David Thompson",
      role: "Former Youth",
      content: "Growing up at Pluming Eagle Lodge taught me resilience, cultural pride, and the importance of community. The skills and support I received here continue to guide me in my adult life. I'm forever grateful.",

    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      role: "Social Worker",
      content: "The comprehensive approach at Pluming Eagle Lodge is exceptional. They address not just immediate needs but create lasting foundations for healing and growth. Their programs are truly life-changing.",

    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-150 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            What People Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from families, community partners, and those who have experienced the transformative impact of our programs.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 sm:p-10 shadow-lg max-w-4xl mx-auto">


                    {/* Testimonial Content */}
                    <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider; 