import styled from "styled-components";

export const BackgroundStyles = {
  Wrapper: styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    background: linear-gradient(105.83deg, #ff284c 0%, #042f6f 100%);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  `,

  Pattern: styled.div`
    position: absolute;
    inset: 0;
    background: url("/Background.svg") no-repeat center;
    background-size: cover;
    opacity: 0.3;

    -webkit-mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-composite: destination-in;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: cover;

    mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    mask-composite: intersect;
    mask-repeat: no-repeat;
    mask-size: cover;

    img {
      width: 200%;
      height: auto;
    }
  `,

  Content: styled.div`
    position: relative;
    z-index: 1; /* keep form above svg */
  `,

  BottomRightText: styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    font-family: "Anta", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: clamp(200px, 20vw, 650px); /* increased size */
    line-height: 0.8;
    letter-spacing: 0;
    color: rgba(255, 255, 255, 0.08);
    pointer-events: none;
    user-select: none;
    z-index: 0;

    display: flex;
    justify-content: flex-end; /* push to right edge */
    align-items: flex-end; /* push to bottom edge */

    /* remove extra font spacing */
    text-align: right;

    /* nudge further right and bottom if needed */
    transform: translate(0.1em, 0.05em);
  `,
};
