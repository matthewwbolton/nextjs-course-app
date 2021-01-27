import React from "react";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { params } = router.query;

  return <h1>HELLO!</h1>;
};
