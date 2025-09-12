"use client";

import React from "react";
import styles from "./GlassButton.module.css";

interface GlassButtonProps {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  padding?: string;
  gap?: number | string;
  opacity?: number;
  borderWidth?: number | string;
  backgroundColor?: string;
  onClick?: () => void;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  width = 200,
  height = 56,
  borderRadius = "40px",
  padding = "14px 16px",
  gap = "8px",
  opacity = 1,
  borderWidth = "0.5px",
  backgroundColor = "rgba(255, 255, 255, 0.1)",
  onClick,
}) => {
  return (
    <button
      className={styles.glassButton}
      style={{
        width,
        height,
        borderRadius,
        padding,
        gap,
        opacity,
        borderWidth,
        background: backgroundColor,
      }}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default GlassButton;
