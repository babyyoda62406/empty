import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const ServicesPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-opensans items-end justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[891px] md:px-5 relative w-full">
                  <Img
                    className="h-[891px] m-auto object-cover w-full"
                    src="images/img_adobestock310133662.png"
                    alt="adobestock31013"
                  />
                  <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                    <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                      <ul className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-center justify-center mb-[13px] md:ml-[0] ml-[996px] md:mt-0 mt-[18px] w-[27%] md:w-full common-row-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-black-900 text-xl"
                          >
                            <Text size="txtOpenSans20">Home</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-[72px] text-black-900 text-xl"
                          >
                            <Text size="txtOpenSans20">About Us</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-[71px] text-black-900 text-xl"
                          >
                            <Text size="txtOpenSans20">Services</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="ml-[75px] text-black-900 text-xl"
                          >
                            <Text size="txtOpenSans20">Careers</Text>
                          </a>
                        </li>
                      </ul>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[135px] md:ml-[0] ml-[67px] mr-[212px] md:mt-0 my-2.5 text-center text-sm uppercase"
                        shape="round"
                        size="xs"
                        variant="gradient"
                        color="red_400_pink_900"
                      >
                        Contact us
                      </Button>
                    </header>
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
                    <div className="h-[121px] md:h-[349px] mt-[244px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[105px] inset-x-[0] mx-auto object-cover md:w-full"
                        src="images/img_shapesgroup_gray_100.png"
                        alt="shapesgroup"
                      />
                      <Line className="absolute bg-white-A700 h-11 inset-x-[0] mx-auto top-[0] w-[3px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[650px] md:h-[804px] mt-[154px] md:px-5 relative w-[89%] md:w-full">
          <div className="absolute bg-blue_gray-800 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[69px] md:px-10 sm:px-5 rounded-[16px] shadow-bs2 w-full">
            <Img
              className="h-[104px] ml-0.5 md:ml-[0] w-[104px]"
              src="images/img_support1.svg"
              alt="supportOne"
            />
            <Text
              className="ml-0.5 md:ml-[0] mt-[25px] text-4xl sm:text-[32px] md:text-[34px] text-red-400 uppercase"
              size="txtOpenSansBold36"
            >
              System Integration
            </Text>
            <Text
              className="mb-14 ml-0.5 md:ml-[0] mt-[15px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-[41%] sm:w-full"
              size="txtOpenSans21"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>
          </div>
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto pl-1.5 right-[0] rounded-[16px] shadow-bs3 w-[57%]">
            <Img
              className="h-[650px] md:h-auto object-cover rounded-tl-[324px] w-full"
              src="images/img_adobestock170801444_650x955.png"
              alt="adobestock17080"
            />
          </div>
        </div>
        <div className="flex flex-col items-start mt-[278px] md:pr-10 sm:pr-5 pr-[212px] w-full">
          <div className="h-[650px] relative w-full">
            <div className="absolute bg-blue_gray-800 bottom-[0] flex flex-col inset-x-[0] items-start justify-center mx-auto p-[49px] md:px-10 sm:px-5 rounded-[16px] shadow-bs2 w-full">
              <Img
                className="h-24 md:ml-[0] ml-[983px] mt-2.5 w-24"
                src="images/img_desktop1.svg"
                alt="desktopOne"
              />
              <Text
                className="md:ml-[0] ml-[983px] mt-[31px] text-4xl sm:text-[32px] md:text-[34px] text-red-400 uppercase"
                size="txtOpenSansBold36"
              >
                IT Services
              </Text>
              <Text
                className="mb-[60px] md:ml-[0] ml-[983px] mt-3.5 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-[39%] sm:w-full"
                size="txtOpenSans21"
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
            <Img
              className="absolute h-[650px] inset-y-[0] left-[0] my-auto object-cover rounded-tr-[302px] w-[57%]"
              src="images/img_adobestock227421922_650x958.png"
              alt="adobestock22742"
            />
          </div>
        </div>
        <div className="h-[649px] md:h-[925px] mt-[276px] md:px-5 relative w-[89%] md:w-full">
          <footer className="absolute bg-blue_gray-800 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto rounded-[16px] shadow-bs2 w-full">
            <div className="flex flex-col items-center justify-center ml-[70px] mr-[404px] my-[104px] w-[73%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[52%] md:w-full">
                  <div className="flex flex-col h-[95px] items-center justify-start w-[95px]">
                    <div className="flex flex-col h-[95px] items-center justify-start w-[95px]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[95px] items-center justify-start p-1.5 w-[95px]"
                        style={{
                          backgroundImage:
                            "url('images/img_033uidatainformation.svg')",
                        }}
                      >
                        <ul className="flex flex-col h-[82px] items-center justify-start w-[82px] common-column-list">
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row items-center justify-end">
                                <div className="bg-red-400 h-[3px] rounded-[1px] w-[3px]"></div>
                                <div className="bg-red-400 h-[3px] ml-[3px] rounded-[1px] w-[3px]"></div>
                                <div className="bg-red-400 h-[3px] ml-[3px] rounded-[1px] w-[3px]"></div>
                                <Img
                                  className="h-[3px] ml-[52px]"
                                  src="images/img_shape_red_400.svg"
                                  alt="shape"
                                />
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row items-center justify-evenly mt-[9px]">
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
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row gap-[7px] items-center justify-between mt-[3px]">
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
                                <Img
                                  className="h-[3px]"
                                  src="images/img_shape_white_a700.svg"
                                  alt="shape_Three"
                                />
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row gap-[7px] items-center justify-between mt-[3px]">
                                <Img
                                  className="h-[3px]"
                                  src="images/img_shape_white_a700.svg"
                                  alt="shape_Four"
                                />
                                <Img
                                  className="h-[3px]"
                                  src="images/img_shape_white_a700.svg"
                                  alt="shape_Five"
                                />
                                <Img
                                  className="h-[3px]"
                                  src="images/img_shape_white_a700.svg"
                                  alt="shape_Six"
                                />
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <Img
                                className="h-9 mt-[3px]"
                                src="images/img_dashboard.svg"
                                alt="dashboard"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="mt-[25px] text-4xl sm:text-[32px] md:text-[34px] text-red-400 uppercase"
                    size="txtOpenSansBold36"
                  >
                    Process Optimization
                  </Text>
                  <Text
                    className="mt-[9px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-full"
                    size="txtOpenSans21"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </Text>
                </div>
                <div className="flex flex-col h-[95px] items-center justify-start w-[95px]">
                  <div className="flex flex-col h-[95px] items-center justify-start w-[95px]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[95px] items-center justify-start p-1.5 w-[95px]"
                      style={{
                        backgroundImage:
                          "url('images/img_033uidatainformation.svg')",
                      }}
                    >
                      <ul className="flex flex-col h-[82px] items-center justify-start w-[82px] common-column-list">
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row items-center justify-end">
                              <div className="bg-red-400 h-[3px] rounded-[1px] w-[3px]"></div>
                              <div className="bg-red-400 h-[3px] ml-[3px] rounded-[1px] w-[3px]"></div>
                              <div className="bg-red-400 h-[3px] ml-[3px] rounded-[1px] w-[3px]"></div>
                              <Img
                                className="h-[3px] ml-[52px]"
                                src="images/img_shape_red_400.svg"
                                alt="shape_Seven"
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row items-center justify-evenly mt-[9px]">
                              <Img
                                className="h-[17px]"
                                src="images/img_television.svg"
                                alt="television_Two"
                              />
                              <Img
                                className="h-[17px]"
                                src="images/img_television_white_a700.svg"
                                alt="television_Three"
                              />
                              <Img
                                className="h-[17px]"
                                src="images/img_thumbsup_red_400.svg"
                                alt="thumbsup_One"
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-[7px] items-center justify-between mt-[3px]">
                              <Img
                                className="h-[3px]"
                                src="images/img_shape_white_a700.svg"
                                alt="shape_Eight"
                              />
                              <Img
                                className="h-[3px]"
                                src="images/img_shape_white_a700.svg"
                                alt="shape_Nine"
                              />
                              <Img
                                className="h-[3px]"
                                src="images/img_shape_white_a700.svg"
                                alt="shape_Ten"
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-[7px] items-center justify-between mt-[3px]">
                              <Img
                                className="h-[3px]"
                                src="images/img_shape_white_a700.svg"
                                alt="shape_Eleven"
                              />
                              <Img
                                className="h-[3px]"
                                src="images/img_shape_white_a700.svg"
                                alt="shape_Twelve"
                              />
                              <Img
                                className="h-[3px]"
                                src="images/img_shape_white_a700.svg"
                                alt="shape_Thirteen"
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <Img
                              className="h-9 mt-[3px]"
                              src="images/img_dashboard.svg"
                              alt="dashboard_One"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto pl-[5px] right-[0] rounded-[16px] w-[57%]">
            <Img
              className="h-[649px] md:h-auto object-cover rounded-tl-[324px] w-full"
              src="images/img_adobestock170801444_649x955.png"
              alt="adobestock17080_One"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-[236px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-400 uppercase"
            size="txtOpenSansBold36"
          >
            You need to know more?! lET’S talk now!
          </Text>
          <Button
            className="cursor-pointer font-bold leading-[normal] min-w-[135px] mt-[38px] text-center text-sm uppercase"
            shape="round"
            size="xs"
            variant="gradient"
            color="red_400_pink_900"
          >
            {" "}
            gET IN TOUCH
          </Button>
          <Footer className="flex items-center justify-center mt-[106px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
