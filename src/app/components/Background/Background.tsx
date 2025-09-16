// // components/Background.tsx
// "use client";
// import React from "react";
// import styles from "./Background.module.css";

// interface BackgroundProps {
//   children: React.ReactNode;
// }

// const Background: React.FC<BackgroundProps> = ({ children }) => {
//   return (
//     <div className={styles.background}>
//       <img src="/Background.svg" alt="Pattern" className={styles.pattern} />
//       <div className={styles.content}>{children}</div>
//     </div>
//   );
// };

// export default Background;

// components/Background.tsx
// components/Background.tsx
"use client";
import React from "react";
import { BackgroundStyles as styled } from "./Background.style";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <styled.Wrapper>
      <styled.Pattern />
      <styled.Content>{children}</styled.Content>
      <styled.BottomRightText>AI</styled.BottomRightText>
    </styled.Wrapper>
  );
};

export default Background;
