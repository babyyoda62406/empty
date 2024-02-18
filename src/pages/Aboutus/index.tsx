import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboutusPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 border border-gray-200 border-solid flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[889px] md:h-[944px] md:px-5 relative w-full">
                  <Img
                    className="h-[889px] m-auto object-cover w-full"
                    src="images/img_adobestock271347901.png"
                    alt="adobestock27134"
                  />
                  <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                    <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
                    <div className="h-[135px] md:h-[416px] mt-[329px] relative w-1/2 md:w-full">
                      <Text
                        className="absolute inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-red-400 top-[0] uppercase w-max"
                        size="txtOpenSansBold36"
                      >
                        Lorem ipsum dolor sit amet sit amet
                      </Text>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[17px] md:text-[19px] text-[21px] text-center text-white-A700 w-full"
                        size="txtOpenSans21"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Text>
                    </div>
                    <div className="h-[120px] md:h-[349px] mt-[244px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[105px] inset-x-[0] mx-auto"
                        src="images/img_shapesgroup.svg"
                        alt="shapesgroup"
                      />
                      <Line className="absolute bg-white-A700 h-11 inset-x-[0] mx-auto top-[0] w-[3px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[98px] items-start justify-end md:ml-[0] ml-[212px] mt-[159px] md:px-5 w-[89%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[38%] md:w-full">
              <div className="flex flex-col gap-7 items-start justify-start w-[30%] md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800 uppercase"
                  size="txtOpenSans36"
                >
                  <>
                    we <br />
                    are tech
                  </>
                </Text>
                <Line className="bg-red-400 h-[3px] ml-0.5 md:ml-[0] w-2/5" />
              </div>
              <Text
                className="mt-[51px] text-4xl sm:text-[32px] md:text-[34px] text-red-400 uppercase w-[99%] sm:w-full"
                size="txtOpenSansBold36"
              >
                Lorem ipsum dolor sit amet sit amet
              </Text>
              <Text
                className="mt-5 sm:text-[17px] md:text-[19px] text-[21px] text-black-900 w-full"
                size="txtOpenSans21Black900"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start pl-[5px] rounded-[16px] w-[57%] md:w-full">
              <Img
                className="h-[649px] md:h-auto object-cover rounded-bl-[324px] rounded-tr-[324px] w-full"
                src="images/img_adobestock170801444_649x959.png"
                alt="adobestock17080"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1708px] mt-[314px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[264px] justify-start w-[57%] md:w-full">
              <Img
                className="h-[604px] md:h-auto object-cover rounded-br-[302px] w-full"
                src="images/img_adobestock227421922_604x960.png"
                alt="adobestock22742"
              />
              <div className="flex flex-col gap-7 items-start justify-start md:ml-[0] ml-[212px] w-1/5 md:w-full">
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
            <div className="flex md:flex-1 flex-col gap-[46px] items-end justify-start w-[38%] md:w-full">
              <div className="flex flex-col gap-7 items-end justify-start w-[27%] md:w-full">
                <Text
                  className="mr-0.5 text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800 text-right uppercase"
                  size="txtOpenSans36"
                >
                  <>
                    we are
                    <br />
                    digital
                  </>
                </Text>
                <Line className="bg-red-400 h-[3px] rotate-[180deg] w-[44%]" />
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-red-400 uppercase w-[99%] sm:w-full"
                  size="txtOpenSansBold36"
                >
                  Lorem ipsum dolor sit amet sit amet
                </Text>
                <Text
                  className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900 w-full"
                  size="txtOpenSans21Black900"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1496px] mt-[54px] mx-auto md:px-5 w-full">
            <div className="bg-blue_gray-800 flex md:flex-1 flex-col items-center justify-start p-[55px] md:px-10 sm:px-5 rounded-[16px] shadow-bs2 w-[478px] md:w-full">
              <Img
                className="h-[104px] mt-[15px] w-[104px]"
                src="images/img_support1.svg"
                alt="supportOne"
              />
              <Text
                className="mt-[31px] sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                size="txtOpenSansBold27WhiteA700"
              >
                System Integration
              </Text>
              <Text
                className="mb-7 text-base text-center text-white-A700 w-full"
                size="txtOpenSans16WhiteA700"
              >
                In today’s digital world, the ability to effectively integrate
                across different systems, data sources, and channels is
                fundamental. Indium technologies has a long history of
                successfully and efficiently integrating a variety of
                client-based systems
              </Text>
            </div>
            <div className="bg-white-A700_cc flex md:flex-1 flex-col items-center justify-center md:ml-[0] ml-[33px] p-[52px] md:px-10 sm:px-5 rounded-[16px] shadow-bs2 w-[478px] md:w-full">
              <Img
                className="h-24 mt-[21px] w-24"
                src="images/img_desktop1_blue_gray_800.svg"
                alt="desktopOne"
              />
              <Text
                className="mt-5 sm:text-[23px] md:text-[25px] text-[27px] text-blue_gray-800"
                size="txtOpenSansBold27"
              >
                IT Services
              </Text>
              <Text
                className="mb-[31px] mt-[15px] text-blue_gray-800 text-center text-lg w-[99%] sm:w-full"
                size="txtOpenSans18Bluegray800"
              >
                While you focus on delivering the best products or services you
                can to your customers, we provide the support you need to keep
                up with industry demands and emerging trends
              </Text>
            </div>
            <div className="bg-blue_gray-800 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[29px] p-[55px] md:px-10 sm:px-5 rounded-[16px] shadow-bs2 w-[478px] md:w-full">
              <div className="flex flex-col h-[95px] items-center justify-start mt-[18px] w-[95px]">
                <div className="flex flex-col h-[95px] items-center justify-start w-[95px]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[95px] items-center justify-start p-1.5 w-[95px]"
                    style={{
                      backgroundImage:
                        "url('images/img_033uidatainformation.svg')",
                    }}
                  >
                    <div className="flex flex-col h-[82px] items-center justify-start w-[82px]">
                      <div className="flex flex-row items-center justify-end w-full">
                        <div className="bg-red-400 h-[3px] rounded-[1px] w-[3px]"></div>
                        <div className="bg-red-400 h-[3px] ml-[3px] rounded-[1px] w-[3px]"></div>
                        <div className="bg-red-400 h-[3px] ml-[3px] rounded-[1px] w-[3px]"></div>
                        <Img
                          className="h-[3px] ml-[52px]"
                          src="images/img_shape_red_400.svg"
                          alt="shape"
                        />
                      </div>
                      <List
                        className="flex flex-col gap-[3px] items-center mt-[9px] w-[93%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <Img
                            className="h-[17px]"
                            src="images/img_television.svg"
                            alt="television"
                          />
                          <Img
                            className="h-[17px]"
                            src="images/img_television_white_a700.svg"
                            alt="television_One"
                          />
                          <Img
                            className="h-[17px]"
                            src="images/img_thumbsup_red_400.svg"
                            alt="thumbsup"
                          />
                        </div>
                        <div className="flex flex-row gap-[7px] items-center justify-between w-[95%] md:w-full">
                          <Img
                            className="h-[3px]"
                            src="images/img_shape_white_a700.svg"
                            alt="shape"
                          />
                          <Img
                            className="h-[3px]"
                            src="images/img_shape_white_a700.svg"
                            alt="shape_One"
                          />
                          <Img
                            className="h-[3px]"
                            src="images/img_shape_white_a700.svg"
                            alt="shape_Two"
                          />
                        </div>
                        <div className="flex flex-row gap-[7px] items-center justify-between w-[95%] md:w-full">
                          <Img
                            className="h-[3px]"
                            src="images/img_shape_white_a700.svg"
                            alt="shape"
                          />
                          <Img
                            className="h-[3px]"
                            src="images/img_shape_white_a700.svg"
                            alt="shape_One"
                          />
                          <Img
                            className="h-[3px]"
                            src="images/img_shape_white_a700.svg"
                            alt="shape_Two"
                          />
                        </div>
                      </List>
                      <Img
                        className="h-9 mt-[3px]"
                        src="images/img_dashboard.svg"
                        alt="dashboard"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="mt-6 sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                size="txtOpenSansBold27WhiteA700"
              >
                Process Optimization
              </Text>
              <Text
                className="mb-11 text-center text-lg text-white-A700 w-full"
                size="txtOpenSans18WhiteA700"
              >
                Improve efficiencies by leveraging methodology and productivity
                tools. Re-energize workforce management to identify saving
                opportunities, optimize contacts or enhance front-/back-office
                productive output
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[580px] mt-[264px] text-4xl sm:text-[32px] md:text-[34px] text-red-400 uppercase"
            size="txtOpenSansBold36"
          >
            Sounds Great?! Let’s work together!
          </Text>
          <Button
            className="cursor-pointer font-bold leading-[normal] min-w-[135px] md:ml-[0] ml-[885px] mt-11 text-center text-sm uppercase"
            shape="round"
            size="xs"
            variant="gradient"
            color="red_400_pink_900"
          >
            Contact Us
          </Button>
          <Footer className="flex items-center justify-center mt-[91px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutusPage;
