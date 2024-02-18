import React from "react";

import { Button, Img, Input, Line, List, Text, TextArea } from "components";
import Footer from "components/Footer";

const Home1Page: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="h-[919px] md:px-5 relative w-full">
            <Button
              className="cursor-pointer font-bold leading-[normal] mb-[-14px] min-w-[135px] ml-auto mr-[212px] mt-2.5 text-center text-sm uppercase z-[1]"
              shape="round"
              size="xs"
              variant="gradient"
              color="red_400_pink_900"
            >
              Contact us
            </Button>
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[undefinedpx] mx-auto p-[11px] w-full z-[1]">
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[201px] w-[15%] md:w-full">
                <Img
                  className="h-[37px] md:h-auto object-cover w-full"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-center mr-[403px] w-[27%] md:w-full">
                <Text className="text-black-900 text-xl" size="txtOpenSans20">
                  Home
                </Text>
                <Text
                  className="sm:ml-[0] ml-[72px] text-black-900 text-xl"
                  size="txtOpenSans20"
                >
                  About Us
                </Text>
                <Text
                  className="sm:ml-[0] ml-[71px] text-black-900 text-xl"
                  size="txtOpenSans20"
                >
                  Services
                </Text>
                <a
                  href="javascript:"
                  className="sm:ml-[0] ml-[75px] text-black-900 text-xl"
                >
                  <Text size="txtOpenSans20">Careers</Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mb-[undefinedpx] mt-auto mx-auto w-full z-[1]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[883px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <Img
                      className="h-[883px] md:h-auto object-cover w-full"
                      src="images/img_adobestock341167197.png"
                      alt="adobestock34116"
                    />
                  </div>
                  <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-center justify-center m-auto pt-[353px] w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-red-400"
                      size="txtOpenSansBold36"
                    >
                      DISCOVER A WORLD OF OPPORTUNITIES
                    </Text>
                    <Text
                      className="mt-1.5 sm:text-[17px] md:text-[19px] text-[21px] text-center text-white-A700 w-1/2 sm:w-full"
                      size="txtOpenSans21"
                    >
                      We empower a diverse IT service-oriented workforce where
                      strong individuals are unified by a clear common purpose –
                      to deliver excellence and high level of customer
                      satisfaction.
                    </Text>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[135px] mt-[46px] text-center text-sm uppercase"
                      shape="round"
                      size="xs"
                      variant="gradient"
                      color="red_400_pink_900"
                    >
                      Get started
                    </Button>
                    <Line className="bg-white-A700 h-11 mt-[178px] w-[3px]" />
                    <Img
                      className="h-[102px] mt-[3px]"
                      src="images/img_shapesgroup.svg"
                      alt="shapesgroup"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1707px] mt-[71px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[38%] md:w-full">
              <div className="flex flex-col gap-7 items-start justify-start w-[30%] md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800 uppercase"
                  size="txtOpenSans36"
                >
                  <>
                    who <br />
                    we are
                  </>
                </Text>
                <Line className="bg-red-400 h-[3px] ml-0.5 md:ml-[0] w-2/5" />
              </div>
              <Text
                className="mt-12 text-4xl sm:text-[32px] md:text-[34px] text-red-400 uppercase w-[99%] sm:w-full"
                size="txtOpenSansBold36"
              >
                Technology investments as a differentiator
              </Text>
              <Text
                className="mt-5 sm:text-[17px] md:text-[19px] text-[21px] text-black-900 w-full"
                size="txtOpenSans21Black900"
              >
                No forced partnership technology here. We focus on the right
                solution to drive our clients’ business forward and employ a
                technology-agnostic approach for all needed stages of the
                activity cycle, allowing access to current, robust, and advanced
                solutions. Paramount to this is ensuring the security and
                compliant use of all information. In the end, it’s not just
                technology; we ensure our methodologies, staff, industry
                knowledge, and governance align with the technology to drive the
                right client results.
              </Text>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[135px] mt-[30px] text-center text-sm uppercase"
                shape="round"
                size="xs"
                variant="gradient"
                color="red_400_pink_900"
              >
                Get started
              </Button>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[58px] pl-[5px] rounded-[16px] w-[57%] md:w-full">
              <Img
                className="h-[649px] md:h-auto object-cover rounded-bl-[324px] rounded-tr-[324px] w-full"
                src="images/img_adobestock170801444.png"
                alt="adobestock17080"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[258px] md:px-5 w-[89%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[244px] justify-start md:mt-0 mt-[58px] w-[57%] md:w-full">
              <Img
                className="h-[604px] md:h-auto object-cover rounded-br-[302px] w-full"
                src="images/img_adobestock227421922.png"
                alt="adobestock22742"
              />
              <div className="flex flex-col gap-7 items-start justify-start md:ml-[0] ml-[210px] w-1/5 md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800 uppercase"
                  size="txtOpenSans36"
                >
                  <>
                    Our <br />
                    products
                  </>
                </Text>
                <Line className="bg-red-400 h-[3px] ml-0.5 md:ml-[0] w-2/5" />
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[140px] items-center justify-start md:ml-[0] ml-[153px] md:mt-0 mt-[155px] w-[7%] md:w-full">
              <Img
                className="h-[108px] w-[108px]"
                src="images/img_group3.svg"
                alt="groupThree"
              />
              <Img
                className="h-20 w-20"
                src="images/img_pathway1.svg"
                alt="pathwayOne"
              />
            </div>
            <div className="flex flex-col gap-[37px] items-end justify-start ml-12 md:ml-[0] w-[26%] md:w-full">
              <div className="flex flex-col gap-7 items-end justify-start w-[39%] md:w-full">
                <Text
                  className="mr-0.5 text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800 text-right uppercase"
                  size="txtOpenSans36"
                >
                  <>
                    we build
                    <br />
                    future
                  </>
                </Text>
                <Line className="bg-red-400 h-[3px] rotate-[180deg] w-[44%]" />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                    size="txtOpenSansBold21"
                  >
                    Our Mission & Vision{" "}
                  </Text>
                  <Text
                    className="text-black-900 text-lg w-full"
                    size="txtOpenSans18"
                  >
                    As experienced professionals in the field of software
                    development, user experience, and marketing performance, we
                    are aware of the hard work, dedication, and overall
                    diligence required to prosper in modern-day business.
                  </Text>
                </div>
                <Text
                  className="mt-[76px] sm:text-[17px] md:text-[19px] text-[21px] text-black-900"
                  size="txtOpenSansBold21"
                >
                  {" "}
                  Our Approach{" "}
                </Text>
                <Text
                  className="mt-[3px] text-black-900 text-lg w-full"
                  size="txtOpenSans18"
                >
                  As a result, we offer our clients with the development of CRM
                  cloud systems, bespoke website development and design, project
                  and R&D management, custom development, and system
                  integration.
                </Text>
              </div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[75px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1270px] mt-16 mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-blue_gray-800 flex flex-col items-center justify-end p-[43px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[104px] mt-4 w-[104px]"
                  src="images/img_support1.svg"
                  alt="supportOne"
                />
              </div>
              <Text
                className="mt-[13px] sm:text-[23px] md:text-[25px] text-[27px] text-blue_gray-800"
                size="txtOpenSansBold27"
              >
                System Integration
              </Text>
              <Text
                className="text-base text-blue_gray-800 w-full"
                size="txtOpenSans16"
              >
                In today’s digital world, the ability to effectively integrate
                across different systems, data sources, and channels is
                fundamental. Indium technologies has a long history of
                successfully and efficiently integrating a variety of
                client-based systems
              </Text>
              <div className="flex flex-col items-center justify-start mt-[5px] w-[23%] md:w-full">
                <Text className="text-red-400 text-sm" size="txtOpenSansBold14">
                  READ MORE
                </Text>
                <Line className="bg-red-400 h-px mt-0.5 w-[98%]" />
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-blue_gray-800 flex flex-col items-center justify-start p-[55px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-24 w-24"
                  src="images/img_desktop1.svg"
                  alt="desktopOne"
                />
              </div>
              <Text
                className="mt-[11px] sm:text-[23px] md:text-[25px] text-[27px] text-blue_gray-800"
                size="txtOpenSansBold27"
              >
                IT Services
              </Text>
              <Text
                className="text-blue_gray-800 text-lg w-full"
                size="txtOpenSans18Bluegray800"
              >
                While you focus on delivering the best products or services you
                can to your customers, we provide the support you need to keep
                up with industry demands and emerging trends
              </Text>
              <div className="flex flex-col items-center justify-start mt-1.5 w-[23%] md:w-full">
                <Text className="text-red-400 text-sm" size="txtOpenSansBold14">
                  READ MORE
                </Text>
                <Line className="bg-red-400 h-px mt-0.5 w-[98%]" />
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="bg-blue_gray-800 flex flex-col items-center justify-start p-[51px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[95px] mb-[9px] w-[95px]"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
              </div>
              <Text
                className="mt-3.5 sm:text-[23px] md:text-[25px] text-[27px] text-blue_gray-800"
                size="txtOpenSansBold27"
              >
                Process Optimization
              </Text>
              <Text
                className="text-blue_gray-800 text-lg w-full"
                size="txtOpenSans18Bluegray800"
              >
                Improve efficiencies by leveraging methodology and productivity
                tools. Re-energize workforce management to identify saving
                opportunities, optimize contacts or enhance front-/back-office
                productive output
              </Text>
              <div className="flex flex-col items-center justify-start mt-[18px] w-[23%] md:w-full">
                <Text className="text-red-400 text-sm" size="txtOpenSansBold14">
                  READ MORE
                </Text>
                <Line className="bg-red-400 h-px mt-0.5 w-[98%]" />
              </div>
            </div>
          </List>
          <div className="sm:h-[1254px] h-[670px] md:h-[911px] max-w-[1272px] mt-[242px] mx-auto md:px-5 relative w-full">
            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-9 sm:px-5 rounded-[16px] shadow-bs2 w-full">
              <div className="flex ml-1 md:ml-[0] mt-8 relative w-[55%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[74px] items-start justify-start my-auto w-[36%]">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-red-400 tracking-[-0.80px]"
                      size="txtOpenSansBold36"
                    >
                      Say Hi!
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-xl"
                      size="txtOpenSans20Bluegray500"
                    >
                      We’d like to talk with you.
                    </Text>
                  </div>
                  <div className="flex flex-col md:gap-10 gap-[70px] items-start justify-start ml-1 md:ml-[0] w-[36%] md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-900 text-xs"
                        size="txtOpenSansBold12"
                      >
                        My name is
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-900 text-xs"
                        size="txtOpenSansBold12"
                      >
                        My email is
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-xs"
                        size="txtOpenSansBold12"
                      >
                        Your message
                      </Text>
                    </div>
                  </div>
                </div>
                <Input
                  name="input"
                  placeholder="Full name"
                  className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full z-[1]"
                  wrapClassName="mb-[130px] ml-[-235.74px] mr-auto mt-auto w-full z-[1]"
                  type="text"
                ></Input>
                <Input
                  name="input_One"
                  placeholder="Email"
                  className="p-0 placeholder:text-blue_gray-400 text-base text-left w-full z-[1]"
                  wrapClassName="mb-[39px] ml-[-235.74px] mr-auto mt-auto w-full z-[1]"
                  type="email"
                ></Input>
              </div>
              <TextArea
                className="bg-gray-100 border-0 ml-1 md:ml-[0] mt-[11px] pb-[35px] pt-3.5 sm:px-5 px-[34px] rounded-[15px] shadow-bs text-base placeholder:text-blue_gray-400 text-blue_gray-400 text-left w-[55%] sm:w-full"
                name="input_Two"
                placeholder="I want to say that..."
              ></TextArea>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[135px] md:ml-[0] ml-[525px] mt-[26px] text-center text-sm uppercase"
                shape="round"
                size="xs"
                variant="gradient"
                color="red_400_pink_900"
              >
                Send message
              </Button>
            </div>
            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[41%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start rounded-br-[16px] rounded-tr-[16px] w-full">
                  <div className="sm:h-[1012px] h-[669px] relative rounded-br-[16px] rounded-tr-[16px] w-full">
                    <Img
                      className="h-[669px] m-auto object-cover rounded-br-[16px] rounded-tr-[16px] w-full"
                      src="images/img_image.png"
                      alt="image_Five"
                    />
                    <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-start justify-center m-auto rounded-br-[16px] rounded-tr-[16px] w-full">
                      <div className="flex sm:flex-col flex-row gap-11 items-center justify-start w-[93%] md:w-full">
                        <Img
                          className="h-[669px] rounded-br-[16px] rounded-tr-[16px]"
                          src="images/img_shape.svg"
                          alt="shape"
                        />
                        <div className="flex flex-col items-end justify-start w-[77%] sm:w-full">
                          <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[-0.80px]"
                              size="txtOpenSansBold30"
                            >
                              Contact Information
                            </Text>
                            <Text
                              className="leading-[26.00px] text-base text-white-A700 w-full"
                              size="txtOpenSans16WhiteA700"
                            >
                              Fill up the form and our Team will get back to you
                              within 24 hours.
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start mt-[35px] w-[97%] md:w-full">
                            <div className="flex flex-row gap-4 items-start justify-start w-[42%] md:w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_call.svg"
                                alt="call"
                              />
                              <Text
                                className="text-sm text-white-A700_cc"
                                size="txtOpenSans14"
                              >
                                (+40) 772 100 200
                              </Text>
                            </div>
                            <div className="flex flex-row gap-4 items-start justify-start mt-[22px] w-[66%] md:w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_call.svg"
                                alt="call_One"
                              />
                              <Text
                                className="mt-0.5 text-sm text-white-A700_cc"
                                size="txtOpenSans14"
                              >
                                hello@indium-technology.com
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3.5 items-start justify-start mt-[15px] w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_call.svg"
                                alt="call_Two"
                              />
                              <Text
                                className="text-sm text-white-A700_cc"
                                size="txtOpenSans14"
                              >
                                Deák Ferenc utca 23.2.emelet, Budapest, 1052,HU
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[37px] items-center justify-start mt-[52px] w-[52%] md:w-full">
                            <div className="flex flex-col h-[19px] items-center justify-start w-[19px]">
                              <Img
                                className="h-[19px] w-[19px]"
                                src="images/img_facebook.svg"
                                alt="facebook"
                              />
                            </div>
                            <div className="flex flex-col h-[19px] items-center justify-start w-[19px]">
                              <Img
                                className="h-[18px] w-[19px]"
                                src="images/img_twitter.svg"
                                alt="twitter"
                              />
                            </div>
                            <Img
                              className="h-[19px] w-[19px]"
                              src="images/img_call.svg"
                              alt="call_Three"
                            />
                            <Img
                              className="h-[19px] w-[19px]"
                              src="images/img_call.svg"
                              alt="call_Four"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-[137px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default Home1Page;
