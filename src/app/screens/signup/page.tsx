"use client";
import React from "react";
import styles from "./signup.module.css";
import Image from "next/image";
import Input from "../../components/Input/Input";
import GlassButton from "../../components/GlassButtona/GlassButton";
const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.patternWrapper}>
        <img src="/triadpattren.svg" alt="Pattern" className={styles.pattern} />
      </div>

      {/* Left Side */}
      <div className={styles.left}>
        <h1>Welcome to</h1>
        <br />
        <Image
          src="/dexai.svg" // ✅ No "public" in the path
          alt="Logo"
          width={600}
          height={208}
          className={styles.logo}
        />

        <br />
        <h3>“Introducing new features”</h3>
        <br />
        <p className={styles.description}>
          Analyzing previous trends ensures that businesses always make the
          right decision. And as the scale of the decision and it’s impact
          magnifies...
        </p>
      </div>

      {/* Right Side */}
      <div className={styles.right}>
        <h1 className={styles.aiText}>AI</h1>
        <form className={styles.form}>
          <Input label="Email" placeholder="Enter your mail." required />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <br />
          <GlassButton
            height={40}
            width={400}
            backgroundColor="#062F6F"
            onClick={() => console.log("Button clicked! 🚀")}
          >
            Sign In
          </GlassButton>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
