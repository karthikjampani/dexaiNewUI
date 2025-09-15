"use client";
import React, { useState } from "react";
import styles from "./signup.module.css";
import Image from "next/image";
import Input from "../../components/Input/Input";
import GlassButton from "../../components/GlassButtona/GlassButton";

const SignUp = () => {
  const [role, setRole] = useState("Business Owner");

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
          src="/dexai.svg"
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
          {/* Header row */}
          {/* <div className={styles.headerRow}>
            <h2 className={styles.welcome}>Welcome Back</h2>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles.dropdown}
            >
              <option value="Business Owner">Business Owner</option>
              <option value="Accountant">Accountant</option>
            </select>
          </div> */}
          <div className={styles.headerRow}>
            <h2 className={styles.welcome}>Welcome Back</h2>
            <div className={styles.dropdownWrapper}>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className={styles.dropdown}
              >
                <option value="Business Owner">Business Owner</option>
                <option value="Accountant">Accountant</option>
              </select>
              <img
                src="/white-arrow.svg"
                alt="Dropdown arrow"
                className={styles.dropdownIcon}
              />
            </div>
          </div>

          <p className={styles.createAccount}>
            Don’t Have an Account? <span>Create One</span>
          </p>

          <Input label="Email" placeholder="Enter your mail." required />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <GlassButton
            height={40}
            width={400}
            backgroundColor="#062F6F"
            onClick={() => console.log("Button clicked! 🚀")}
          >
            Sign In
          </GlassButton>

          <div className={styles.orDivider}>OR SIGN UP USING</div>

          {/* Social buttons */}
          <div className={styles.socialButtons}>
            <button type="button" className={styles.googleBtn}>
              <img src="/google.svg" alt="Google" /> Google
            </button>
            <button type="button" className={styles.facebookBtn}>
              <img src="/facebook.svg" alt="Facebook" /> Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
