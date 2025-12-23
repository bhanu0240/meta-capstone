import Hero from "./Hero";

import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
