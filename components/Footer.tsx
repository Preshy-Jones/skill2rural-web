import React from "react";
import facebookIcon from "@/public/facebook-icon.svg";
import twitterIcon from "@/public/twitter-icon.svg";
import linkedinIcon from "../public/linkedIn-icon.svg";
import instagramIcon from "@/public/instagram-icon.svg";
import footerLogoMobile from "@/public/skill2rural-footer-logo-mobile.svg";
import footerLogo from "@/public/skill2rural-logo-full.svg";
import Image from "next/image";

const Footer = ({ bgColor }: { bgColor?: string }) => {
  return (
    <div>
      <div className="md:block hidden">
        <div className="relative bg-primary h-40">
          <div
            className={`absolute inset-0 rounded-bl-full rounded-br-full ${
              bgColor ? bgColor : "bg-white"
            }`}
          ></div>
        </div>
        <div className="bg-primary text-white pt-24 pb-20 font-neue px-20">
          <div className="grid grid-cols-footer gap-x-10">
            <div>
              {/* <h1 className=" text-5xl text-[3.6rem] font-light mb-6">
                Skill2Rural
              </h1> */}
              <Image src={footerLogo} alt="footer-logo-full" className="mb-6" />
              <p className="leading-fifth font-thin">
                We are the leading TECH EDUCATION company with students from
                over 30 countries and a leading UK accreditation to deliver the
                best digital workforce training
              </p>
            </div>
            <div>
              <h1 className=" text-3.5xl leading-tertiary mb-2">
                Keep up with us by signing up for our newsletter
              </h1>
              <div className="flex items-center">
                <div className="w-full">
                  <div className="relative w-[60%] mr-16 h-[2.8125rem]">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="pl-3 bg-transparent absolute top-0 w-full border border-inputBorder h-full rounded-largeBtn placeholder-white placeholder-opacity-[87%]"
                    />
                    <button className="hidden lg:block absolute h-[2.3125rem] border border-white rounded-largeBtn top-[50%] translate-y-[-50%] right-1.5 px-4 font-medium leading-fifth font-clash">
                      Subscribe Now
                    </button>
                  </div>
                  <button className="lg:hidden block h-[2.3125rem] border border-white rounded-largeBtn w-full px-4 font-medium leading-fifth font-clash">
                    Subscribe Now
                  </button>
                </div>
                <div className="flex">
                  <div className="border border-white rounded-circle w-14 h-14 flex items-center justify-center mr-6">
                    <Image src={facebookIcon} alt="Facebook Icon" />
                  </div>
                  <div className="border border-white rounded-circle w-14 h-14 flex items-center justify-center mr-6">
                    <Image src={twitterIcon} alt="Twitter Icon" />
                  </div>
                  <div className="border border-white rounded-circle w-14 h-14 flex items-center justify-center mr-6">
                    <Image src={linkedinIcon} alt="Linkedin Icon" />
                  </div>
                  <div className="border border-white rounded-circle w-14 h-14 flex items-center justify-center">
                    <Image src={instagramIcon} alt="Instagram Icon" />
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-3">
                {footerContent.map((item, index) => (
                  <div key={index} className="mt-10">
                    <h1 className="text-white leading-tertiary font-medium mb-2">
                      {item.title}
                    </h1>
                    <ul>
                      {item.links.map((link, index) => (
                        <li
                          key={index}
                          className="text-sm mb-2 font-thin text-white leading-seventh"
                        >
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className=" text-white font-light mt-16 text-center">
            @Skill2Rural 2024, All right reserved
          </p>
        </div>
      </div>
      <MobileFooter bgColor={bgColor} />
    </div>
  );
};

export default Footer;

const MobileFooter = ({ bgColor }: { bgColor?: string }) => {
  return (
    <div className="md:hidden block">
      <div className="relative bg-primary h-40">
        <div
          className={`absolute inset-0 rounded-bl-full rounded-br-full ${
            bgColor ? bgColor : "bg-white"
          }`}
        ></div>
      </div>
      <div className="bg-primary text-white pt-24 pb-20 font-neue px-20">
        <div className="mb-10">
          <Image src={footerLogoMobile} alt="footer-logo" className="mb-3" />
          <p className="leading-fifth font-thin">
            We are the leading TECH EDUCATION company with students from over 30
            countries and a leading UK accreditation to deliver the best digital
            workforce training
          </p>
        </div>
        <div className="">
          <h1 className="leading-fifth mb-2 font-semibold">
            Keep up with us by signing up for our newsletter
          </h1>
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="pl-3 bg-transparent w-full border border-inputBorder rounded-largeBtn placeholder-white placeholder-opacity-[87%] h-[2.8125rem]"
            />
            <button className="h-[2.3125rem] w-full border bg-white text-primary rounded-largeBtn px-4 font-medium leading-fifth font-clash">
              Subscribe Now
            </button>
          </div>
          <div className=" grid grid-cols-2">
            {footerContent.map((item, index) => (
              <div key={index} className="mt-10">
                <h1 className="text-white leading-tertiary font-medium mb-2">
                  {item.title}
                </h1>
                <ul>
                  {item.links.map((link, index) => (
                    <li
                      key={index}
                      className="text-sm mb-2 font-thin text-white leading-seventh"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const footerContent = [
  {
    title: "Company",
    links: ["About Us", "Blog", "Careers", "Community"],
  },
  {
    title: "Help",
    links: ["Contact", "FAQs"],
  },
  {
    title: "Legal",
    links: ["Terms & conditions", "Privacy Policy"],
  },
];
