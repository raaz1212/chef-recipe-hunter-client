// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section id="about" className="bg-sky-50">
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">About Us</h2>
        <div className="mx-auto w-full max-w-4xl">
          <p className="text-lg leading-relaxed text-gray-700 mt-5">
            Welcome to Chef-Food! We are passionate about bringing delicious and
            healthy food to your table.
          </p>
          <br />
          <p className="text-lg leading-relaxed text-gray-700">
            Our team is made up of talented chefs and culinary experts who have
            worked in some of the finest kitchens around the world. We bring
            together our diverse experiences and skills to create unique and
            flavorful dishes that will tantalize your taste buds. At Chef-Food,
            we believe that good food should be accessible to everyone. That is
            why we focus on using fresh, locally sourced ingredients whenever
            possible. Our commitment to sustainability means that we work with
            local farmers and producers to reduce our carbon footprint and
            support our community.
          </p>

          <br />
          <div className="flex flex-wrap justify-start items-center gap-6 mt-8">
            <a
              href="https://bd.linkedin.com/in/raaz-shahriyar-693874219"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              />
            </a>
            <a
              href="https://github.com/raaz1212"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              />
            </a>
            <a href="mailto:raazpika@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              />
            </a>
            <a href="tel:+169696969">
              <FontAwesomeIcon
                icon={faPhone}
                size="2x"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
