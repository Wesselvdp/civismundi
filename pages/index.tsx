import React, { FC, useEffect } from "react";
import { GetStaticProps } from "next";
import querySanity from "@/helpers/querySanity";

// Components
import Mast from "@components/sections/Mast";
// import FeaturedProducts from "@components/sections/FeaturedProducts";
// import Instagram from "@components/sections/Instagram";

type T = {
  allProject: any;
};

const HomePage: FC<T> = ({ allProject }) => {
  const projects = JSON.parse(allProject);
  useEffect(() => {
    console.log(projects);
  }, []);

  return (
    <>
      <Mast />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let projects: [] = [];

  const query = `
    query {
      allProject {
        slug {
          current
        }
        _id
      }
    }`;

  try {
    const response = await querySanity(query);
    projects = response.data.data.allProject;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      allProject: JSON.stringify(projects),
    },
  };
};

export default HomePage;
