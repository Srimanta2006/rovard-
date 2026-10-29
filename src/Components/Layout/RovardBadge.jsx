
import React from "react";

const RovardBadge = () => {
  return (
    <div className="flex items-center justify-center absolute -right-10 -bottom-10">
      <div className="h-40 w-40 rounded-full bg-[#ff5a0a]">

        <svg viewBox="0 0 128 128" className="h-full w-full">
          <defs>
            <path
              id="rovard-arc"
              d="M 64,64 m -47,0 a 47,47 0 1,1 94,0 a 47,47 0 1,1 -94,0"
            />
          </defs>

          {/* Rotating circular text */}
          <g className="rovard-rotate">
            <text
              fill="#21120b"
              fontSize="12"
              fontFamily="monospace"
              fontWeight="700"
              letterSpacing="2"
            >
              <textPath
                href="#rovard-arc"
                startOffset="25%"
                textAnchor="middle"
              >
                EST. 2021 · ROVARD STUDIO .
              </textPath>
            </text>
          </g>

          {/* Stationary number */}
          <text
            x="64"
            y="72"
            textAnchor="middle"
            fill="#090807"
            fontSize="29"
            fontWeight="900"
            fontFamily="Anton, Impact, sans-serif"
          >
            026
          </text>
        </svg>

      </div>
    </div>
  );
};

export default RovardBadge;
