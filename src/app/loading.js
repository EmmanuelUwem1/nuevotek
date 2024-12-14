// components/LoadingWrapper.js
"use client";
import React, { useState, useEffect } from "react";
import Load from "./load";


function Loading() {
     
 
  const [wait, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (wait) {
    return <Load />;
  }
  return <Load />


};

export default Loading;
