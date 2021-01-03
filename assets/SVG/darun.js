import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={5200}
      height={5200}
      viewBox="0 0 5200 5200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d)">
        <circle cx={2600} cy={2600} r={2250} fill="#fff" />
      </g>
      <path
        d="M2089.76 1246.38H1825c-5.52 0-10 4.47-10 10V3943.9c0 5.37 3.28 9.73 8.64 9.87 141.77 3.86 1980.86 27.71 1980.86-1332.27 0-1352.91-1448.94-1375.8-1575.12-1375.23-5.43.03-8.75 4.43-8.75 9.86v276.55c0 5.48 3.57 9.93 9.04 10.11 114.46 3.8 1277.83 66.47 1277.83 1043.71 0 978.61-1276.22 1063.74-1398.37 1069.65-5.64.27-9.37-4.27-9.37-9.91V1256.38c0-5.53-4.48-10-10-10z"
        fill="#010A43"
      />
      <path
        d="M2408.46 3467.83l-177.91 27.86c-6.07.95-11.55-3.74-11.55-9.88V1684.95c0-5.5 3.82-9.96 9.32-9.87 108.44 1.66 1126.53 38.21 1132.68 825.42 6.06 774.82-695.99 905.35-791.74 919.55-5.89.87-10.76-3.76-10.76-9.72v-180.52c0-4.59 2.94-8.56 7.36-9.82 66.79-19.07 565.64-179.63 565.64-719.49 0-538.32-618.58-589.56-704.69-594.08-5.6-.3-9.9 4.2-9.9 9.81v1541.72c0 4.92-3.58 9.11-8.45 9.88z"
        fill="#FF2E63"
      />
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0}
          y={0}
          width={5200}
          height={5200}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius={100}
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={125} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.180392 0 0 0 0 0.388235 0 0 0 0.2 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent
