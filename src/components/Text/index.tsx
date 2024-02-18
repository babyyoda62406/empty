import React from "react";

const sizeClasses = {
  txtOpenSans36: "font-normal font-opensans",
  txtOpenSans14: "font-normal font-opensans",
  txtOpenSans16: "font-normal font-opensans",
  txtOpenSans16WhiteA700: "font-normal font-opensans",
  txtOpenSans18: "font-normal font-opensans",
  txtOpenSansBold30Red400: "font-bold font-opensans",
  txtOpenSans16Bluegray400: "font-normal font-opensans",
  txtOpenSansBold27: "font-bold font-opensans",
  txtOpenSans18WhiteA700: "font-normal font-opensans",
  txtOpenSansBold36: "font-bold font-opensans",
  txtOpenSansBold14: "font-bold font-opensans",
  txtOpenSans20Bluegray500: "font-normal font-opensans",
  txtOpenSans16Bluegray500: "font-normal font-opensans",
  txtOpenSansBold12: "font-bold font-opensans",
  txtOpenSansBold21: "font-bold font-opensans",
  txtOpenSansBold30: "font-bold font-opensans",
  txtOpenSans21Black900: "font-normal font-opensans",
  txtOpenSans18Bluegray800: "font-normal font-opensans",
  txtOpenSansBold27WhiteA700: "font-bold font-opensans",
  txtOpenSans20: "font-normal font-opensans",
  txtOpenSans21: "font-normal font-opensans",
  txtOpenSans14Black900: "font-normal font-opensans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
