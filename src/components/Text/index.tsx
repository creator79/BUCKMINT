import React from "react";

const sizes = {
  xs: "text-[10px] font-medium leading-3",
  lg: "text-base font-normal leading-6",
  s: "text-xs font-normal leading-[15px]",
  "2xl": "text-2xl font-medium leading-[27px]",
  "3xl": "text-4xl font-medium leading-[54px]",
  "4xl": "text-5xl font-medium leading-[54px]",
  xl: "text-lg font-medium leading-6",
  md: "text-sm font-medium leading-[21px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-gray-900 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
