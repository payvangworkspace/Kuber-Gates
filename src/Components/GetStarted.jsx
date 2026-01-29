import React, { useState } from "react";
import styles from "../Styles/GetStarted.module.css";
 
const GetStarted = () => {
  const [isLogin, setIsLogin] = useState(true);
 
  const toggleForm = () => setIsLogin(!isLogin);
 
  return (
<div className={styles.container}>
<div className={styles.card}>
<h1 className={styles.title}>
          {isLogin ? "Welcome Back" : "Create Your Account"}
</h1>
 
        <form className={styles.form}>
          {!isLogin && (
<input
              type="text"
              placeholder="Full Name"
              className={styles.input}
            />
          )}
 
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
          />
 
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
 
          <button type="submit" className={styles.submitBtn}>
            {isLogin ? "Login" : "Sign Up"}
</button>
</form>
 
        <p className={styles.toggleText}>
          {isLogin ? "New here?" : "Already have an account?"}
<span onClick={toggleForm} className={styles.toggleLink}>
            {isLogin ? " Sign Up" : " Login"}
</span>
</p>
</div>
</div>
  );
};
 
export default GetStarted;