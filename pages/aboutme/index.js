import Head from "next/head";

import Abilities from "../../components/abilities";
import Experience from "../../components/experience";
import Hobbies from "../../components/hobbies";
import Languages from "../../components/languages";

const AboutMe = () => {
  return (
    <div className="font-sora m-8 md:m-16">
      <Head>
        <title>Jakub Sajko | About me</title>
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
      </Head>
      <Experience />
      <Abilities />
      <Languages />
      <Hobbies />
    </div>
  );
};

export default AboutMe;
