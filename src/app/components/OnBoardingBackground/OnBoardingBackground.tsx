// components/OnBoardingBackground.tsx
"use client";

import React, { ReactNode } from "react";
import Image from "next/image";

interface OnBoardingBackgroundProps {
  children?: ReactNode;
}

const OnBoardingBackground: React.FC<OnBoardingBackgroundProps> = ({
  children,
}) => {
  return (
    <div style={styles.container}>
      {/* People icon at bottom left, 30% cut off */}
      <div style={styles.iconWrapper}>
        <div style={styles.iconClip}>
          <Image
            src="/peopleIcon.png"
            alt="People Icon"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Render children on top of the background */}
      <div style={styles.childrenWrapper}>{children}</div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(286.54deg, #FF284C -16.99%, #042F6F 100%)",
    overflow: "hidden",
  },
  iconWrapper: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "312px", // full width of icon
    height: "312px",
    zIndex: 1,
    overflow: "hidden", // clip the left part
  },
  iconClip: {
    position: "absolute",
    left: "-25%", // move 30% of the icon out of view
    top: 0,
    width: "100%",
    height: "100%",
  },
  childrenWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    zIndex: 2,
  },
};

export default OnBoardingBackground;
