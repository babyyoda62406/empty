import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const ContactusPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans sm:gap-10 md:gap-10 gap-[68px] items-end justify-start mx-auto pb-44 w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        </div>
        <div className="h-[711px] md:px-5 relative w-[84%] md:w-full">
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] rotate-[90deg] w-3/5">
            <Img
              className="h-[711px] md:h-auto object-cover rounded-bl-[160px] w-full"
              src="images/img_image_711x943.png"
              alt="image"
            />
          </div>
          <div className="absolute bg-white-A700_cc flex flex-col gap-[29px] items-center justify-start left-[0] p-6 sm:px-5 rounded-[16px] shadow-bs4 top-[4%] w-[46%]">
            <div className="flex flex-col gap-[15px] items-center justify-start mt-[7px]">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-center text-red-400 tracking-[-0.80px]"
                size="txtOpenSansBold30Red400"
              >
                Contact us
              </Text>
              <Text
                className="leading-[26.00px] text-base text-blue_gray-500 text-center w-full"
                size="txtOpenSans16Bluegray500"
              >
                For further questions, including partnership opportunities,
                please email hello@indium-technologies.com or contact using our
                contact form.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mb-2 w-[96%] md:w-full">
              <div className="flex relative w-full">
                <div className="flex flex-col items-center justify-start my-auto w-[55%]">
                  <div className="flex flex-col gap-7 items-start justify-start w-full">
                    <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-blue_gray-900 text-xs"
                            size="txtOpenSansBold12"
                          >
                            Full Name
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-blue_gray-900 text-xs"
                            size="txtOpenSansBold12"
                          >
                            Email
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="bg-gray-100 h-10 justify-center pl-8 pr-[35px] sm:px-5 py-2 rounded-[10px] shadow-bs text-base text-blue_gray-400 w-[300px]"
                        size="txtOpenSans16Bluegray400"
                      >
                        Full name
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-900 text-xs"
                        size="txtOpenSansBold12"
                      >
                        How can we help you?
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="bg-gray-100 h-10 justify-center ml-[-32.94px] mt-7 pl-8 pr-[35px] sm:px-5 py-2 rounded-[10px] shadow-bs text-base text-blue_gray-400 w-[326px] z-[1]"
                  size="txtOpenSans16Bluegray400"
                >
                  Email
                </Text>
              </div>
              <div className="bg-gray-100 flex flex-col items-start justify-start mt-[13px] p-[15px] rounded-[15px] shadow-bs w-full">
                <Text
                  className="mb-[87px] md:ml-[0] ml-[19px] text-base text-blue_gray-400"
                  size="txtOpenSans16Bluegray400"
                >
                  I want to say that...
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[134px] mt-[19px] rounded-lg text-center text-sm tracking-[-0.48px]"
                size="xs"
                variant="gradient"
                color="red_400_pink_900"
              >
                SEND MESSAGE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactusPage;
