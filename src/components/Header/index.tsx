import React from "react";

import { Button, Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[212px] md:mt-0 my-[11px] w-[15%] md:w-full">
          <Img
            className="h-[37px] md:h-auto object-cover w-full"
            src="images/img_image1.png"
            alt="imageOne"
          />
        </div>
        <ul className="flex sm:flex-col flex-row sm:hidden items-center justify-center mb-[13px] md:ml-[0] ml-[508px] md:mt-0 mt-[18px] w-[27%] md:w-full common-row-list">
          <li>
            <Text className="text-black-900 text-xl" size="txtOpenSans20">
              Home
            </Text>
          </li>
          <li>
            <Text
              className="ml-[72px] text-black-900 text-xl"
              size="txtOpenSans20"
            >
              About Us
            </Text>
          </li>
          <li>
            <Text
              className="ml-[71px] text-black-900 text-xl"
              size="txtOpenSans20"
            >
              Services
            </Text>
          </li>
          <li>
            <Text
              className="ml-[75px] text-black-900 text-xl"
              size="txtOpenSans20"
            >
              Careers
            </Text>
          </li>
        </ul>
        <Button
          className="cursor-pointer font-bold font-opensans leading-[normal] min-w-[135px] md:ml-[0] ml-[67px] mr-[212px] md:mt-0 my-2.5 text-center text-sm uppercase"
          shape="round"
          size="xs"
          variant="gradient"
          color="red_400_pink_900"
        >
          Contact us
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
