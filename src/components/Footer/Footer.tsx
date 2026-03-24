"use client";

import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";

import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-primary to-primaryDark py-12 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* company Details */}
            <CompanyDetails />
            {/* Links Details */}
            <FooterLinks />
            {/* Social Details */}
            <SocialMedia />
          </div>
        </div>

        <p className="text-white text-center mt-4 pt-4  ">Copyright &copy; 2023 Motion Coder</p>
      </div>
    </>
  );
};
export default Footer;

function CompanyDetails() {
  return (
    <>
      <motion.div 
       initial={{ opacity: 0, y: 100}}
       whileInView={{ opacity: 1, y:0}}     
       transition={{
         delay: 0.2,
         duration: 0.6
       }}
      className="space-y-6">
        <h1 className="text-3xl font-bold uppercase">Motion Coder</h1>
        <p className="text-sm maw-w-[300px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
          excepturi voluptas. Laboriosam libero asperiores nihil!
        </p>

        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <FaPhone />
            +99 1234567890
          </p>

          <p className="flex items-center gap-2">
            <FaMapLocation />
            23 Street, New York , City, Country
          </p>
        </div>
      </motion.div>
    </>
  );
}

function FooterLinks() {
  return (
    <>
      <motion.div
       initial={{ opacity: 0, y: 100}}
       whileInView={{ opacity: 1, y:0}}     
       transition={{
         delay: 0.3,
         duration: 0.6
       }}
      >
        <h1 className="text-3xl font-bold uppercase tracking-wider ">
          Qucik Link
        </h1>

        <div className=" grid grid-cols-2 gap-4">
          {/* first col section */}
          <div>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* secound col section */}
          <div>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function SocialMedia() {
  const creditCardImg = "/assets/creditCard.png";
  const scbImg = "/assets/scb.png";
  const kbankImg = "/assets/kbank.png";

  return (
    <>
      <motion.div 
      initial={{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y:0}}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        delay: 0.4,
        duration: 0.6
      }}
      className="space-y-6 ">
        <h1 className="text-3xl font-bold uppercase tracking-wider">
          Follow Us
        </h1>

        {/* icon section */}
        <div className="flex items-center gap-4">
          <FaFacebook className="text-3xl hover:scale-110 transition-all duration-300" />
          <FaInstagram className="text-3xl hover:scale-110 transition-all duration-300" />
          <FaGoogle className="text-3xl hover:scale-110 transition-all duration-300" />
          <FaTelegram className="text-3xl hover:scale-110 transition-all duration-300" />
        </div>

        {/* Payment Section */}
        <div className="space-y-2">
          <div>
            <p>Payment Method</p>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src={creditCardImg}
              alt="creditCard"
              width={60}
              height={60}
            />

            <Image
              src={scbImg}
              alt="creditCard"
              width={60}
              height={60}
            />

            <Image
              src={kbankImg}
              alt="creditCard"
              width={60}
              height={60}
            />

          </div>
        </div>
      </motion.div>
    </>
  );
}
