// components/LoadingWrapper.js
"use client";
import React, { useState, useEffect } from "react";
import Loading from "./loading";
import Header from "@/components/header";
import Footer from "@/components/footer";

const LoadingWrapper = ({ children }) => {
  const [wait, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (wait) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LoadingWrapper;
