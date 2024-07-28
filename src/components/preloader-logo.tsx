import { cn } from "@/lib/utils";
import React from "react";

type PreloaderLogoProps = {
  className?: string;
};
export default function PreloaderLogo({ className }: PreloaderLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 616 713"
      className={cn("size-20", className)}>
      <circle cx="308" cy="308" r="307.319" fill="#161616" strokeWidth="1.363"></circle>
      <path
        fill="#007EE5"
        stroke="#FFF5F5"
        strokeWidth="1.363"
        d="M183.982 589.424h.396l.196-.343L303.849 380.57l127.869 208.529.199.325h152.661l-.722-1.064-189.115-278.694 181.616-282.04.676-1.051h-145.71l-.198.335-118.974 201.843-127.323-201.86-.201-.318H38.097l.72 1.064L222.092 297.95 32.138 588.37l-.69 1.054h152.534z"></path>
      <g filter="url(#filter0_dddd_184_421)">
        <path
          fill="#fff"
          stroke="#161616"
          strokeWidth="2.726"
          d="M528.506 307.182c0 122.234-99.09 221.324-221.324 221.324-122.234 0-221.324-99.09-221.324-221.324 0-122.233 99.09-221.324 221.324-221.324 122.234 0 221.324 99.091 221.324 221.324z"></path>
        <path
          fill="#161616"
          d="M500.677 307.21c0 106.846-86.622 193.44-193.468 193.44V113.742c106.846 0 193.468 86.595 193.468 193.468z"></path>
      </g>
      <defs>
        <filter
          id="filter0_dddd_184_421"
          width="548.948"
          height="638.896"
          x="32.708"
          y="73.593"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
          <feOffset dy="8.177"></feOffset>
          <feGaussianBlur stdDeviation="9.54"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_184_421"></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
          <feOffset dy="32.708"></feOffset>
          <feGaussianBlur stdDeviation="16.354"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix>
          <feBlend in2="effect1_dropShadow_184_421" result="effect2_dropShadow_184_421"></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
          <feOffset dy="73.593"></feOffset>
          <feGaussianBlur stdDeviation="21.805"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
          <feBlend in2="effect2_dropShadow_184_421" result="effect3_dropShadow_184_421"></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
          <feOffset dy="130.832"></feOffset>
          <feGaussianBlur stdDeviation="25.894"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"></feColorMatrix>
          <feBlend in2="effect3_dropShadow_184_421" result="effect4_dropShadow_184_421"></feBlend>
          <feBlend in="SourceGraphic" in2="effect4_dropShadow_184_421" result="shape"></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
