"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Prefetch = () => {
  const router = useRouter();
  return router.prefetch("/blog/1");
};

export default Prefetch;
