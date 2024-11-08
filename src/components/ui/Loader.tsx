import React from "react"
import { Box } from "@chakra-ui/react";
import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <Box
      bgImage={"/background.png"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"#EB8A90"}
      h={"100vh"}
    >
      <ClipLoader color="#fff" size={50} />
    </Box>
  );
}

export default Loader;
