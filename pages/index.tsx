import React, { FC, useEffect } from "react";
import { GetStaticProps } from "next";
import querySanity from "@/helpers/querySanity";

// Components
// import Mast from "@components/sections/Mast";
// import FeaturedProducts from "@components/sections/FeaturedProducts";
// import Instagram from "@components/sections/Instagram";

type T = {
  allProjects: any;
};

const getData = async () => {
  const query = `
  query($id: ID!) {
    Movie(id: $id) {
      title
    }
  }
  `;

  const variables = {
    id: "0c4e4f8d-d7a6-4162-aea8-431a18039e81",
  };

  const response = await querySanity(query, variables);
  // console.log(response);
};

const getPaths = async () => {
  const query = `
  query {
    allMovie {
      slug {
        current
      }
      _id
    }
  }`;

  const response = await querySanity(query);
  const {
    data: { data: projects },
  } = response;

  // const paths = projects.map(
  //   ({ slug, id }: { slug: { current: string }; id: string }) => ({
  //     params: { slug: slug.current || "", id },
  //   })
  // );
  console.log(projects);
};
// export const getStaticProps: GetStaticProps = async () => {
//   const query = `
//     query {
//       allMovie {
//         slug {
//           current
//         }
//       }
//     }`;

//   // const projects = await sanityClient.fetch(query);
//   // console.log(projects);
//   // console.log("checkout", checkout);
//   // console.log(products);

//   return {
//     props: {
//       allProjects: JSON.stringify(projects),
//     },
//   };
// };

const HomePage: FC<T> = () => {
  useEffect(() => {
    getData();
    getPaths();
  }, []);
  // const projects = JSON.parse(allProjects);
  // const checkoutX = JSON.parse(checkout);
  // console.log("the project:", projects);
  return <h1>hey</h1>;
};

export default HomePage;
