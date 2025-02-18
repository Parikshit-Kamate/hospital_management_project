import React from "react";
import about from "../Static/about.jpg";

const About = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:space-x-6">
          {/* Content Section */}
          <div className="p-6 md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700 mb-4">
              Health care, or healthcare, is the improvement of health via the
              prevention, diagnosis, treatment, amelioration, or cure of
              disease, illness, injury, and other physical and mental
              impairments in people. Health care is delivered by health
              professionals and allied health fields. Medicine, dentistry,
              pharmacy, midwifery, nursing, optometry, and other professions all
              constitute health care.
            </p>
            <p className="text-gray-700 mb-4">
              Providing health care services means "the timely use of personal
              health services to achieve the best possible health outcomes."
              Factors to consider in terms of healthcare access include
              financial limitations, geographical barriers, and sociocultural
              expectations, which significantly impact the use of medical
              services and overall outcomes.
            </p>
            <p className="text-gray-700">
              According to the World Health Organization (WHO), a
              well-functioning healthcare system requires a financing
              mechanism, a well-trained workforce, and reliable information for
              delivering quality care. Health care plays a crucial role in
              improving the well-being of people globally.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={about}
              alt="Healthcare professionals in action"
              className="object-cover w-full h-64 md:h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
