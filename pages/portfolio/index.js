import Head from "next/head";
import Project from "../../components/project";

import { client } from "../../utils/ContentfulClient";

const Portfolio = ({ projects }) => {
  return (
    <div className="font-sora text-slate-500 mt-8 pb-12 md:m-16 md:mt-8">
      <Head>
        <title>Jakub Sajko | Portfolio</title>
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
      </Head>
      <h1 className="py-8 text-center text-3xl font-semibold">Portfolio</h1>
      {projects.map((project) => (
        <Project key={project.sys.id} project={project} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: "projects" });

  return {
    props: {
      projects: res.items,
    },
    revalidate: 1,
  };
};

export default Portfolio;
