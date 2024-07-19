import Link from "next/link";
import React from "react";

export type ButtonLinkProps = {
  value: string;
  href: string;
  borderRadius?: string;
  fontSize?: string;
  px?: string;
  pt?: string;
  pb?: string;
  mx?: string;
  my?: string;
  icon?: React.ReactNode;
  target?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  value,
  href,
  borderRadius,
  px,
  pt,
  pb,
  mx,
  my,
  icon,
  fontSize,
  target
}) => {
  return (
    <a 
      className={`
        bg-indigo-400
        border
        border-indigo-400
        button
        px-5
        cursor-pointer
        duration-500
        flex items-center
        ease-in-out
        hover:bg-transparent
        hover:border-primary
        hover:shadow-button
        ${mx ?? 'mx-auto'}
        ${my ?? 'my-6'}
        ${pt ?? 'pt-3'}
        ${pb ?? 'pb-3'}
        ${px ?? 'px-3.5'}
        ${borderRadius ?? 'rounded-1.25'}
        text-white
        ${fontSize ?? 'text-nav'}
        transition-all 
        justify-center
        text-center
      `}
      href={href}
      target={target ?? "_self"}
    >
      {value}
      {icon ?? undefined}
    </a>
  );
}
