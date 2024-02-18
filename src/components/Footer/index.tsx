import React from "react";

import { Img, Line, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="sm:h-[109px] md:h-[157px] h-[91px] relative w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-end m-auto p-1 w-full"
            style={{ backgroundImage: "url('images/img_group18.svg')" }}
          >
            <div className="flex flex-col gap-4 items-center justify-start mt-1 w-[79%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[19%] md:w-full">
                  <Img
                    className="h-[41px] md:h-auto object-cover w-full"
                    src="images/img_image1.png"
                    alt="imageOne_One"
                  />
                </div>
                <ul className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-[46%] md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-black-900 text-xl"
                      size="txtOpenSans20"
                    >
                      Home
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-black-900 text-xl"
                      size="txtOpenSans20"
                    >
                      About Us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-black-900 text-xl"
                      size="txtOpenSans20"
                    >
                      Services
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-black-900 text-xl"
                      size="txtOpenSans20"
                    >
                      Careers
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-black-900 text-xl"
                      size="txtOpenSans20"
                    >
                      Contact us
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-black-900 text-center text-sm"
                  size="txtOpenSans14Black900"
                >
                  © 2021 IndiumTechnologies All Rights Reserved{" "}
                </Text>
                <Text
                  className="text-black-900 text-center text-sm"
                  size="txtOpenSans14Black900"
                >
                  Deák Ferenc utca 23.2.emelet , Budapest, 1052,HU
                </Text>
              </div>
            </div>
          </div>
          <Line className="absolute bg-gray-200 bottom-[30%] h-px inset-x-[0] mx-auto w-full" />
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
