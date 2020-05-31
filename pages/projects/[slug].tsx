import React, { FC, useEffect } from "react";
import querySanity from "@/helpers/querySanity";

import { GetStaticPaths, GetStaticProps } from "next";

// Components

type T = {
  projectData: any;
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
  console.log(response);
};

const ProductPage: FC<T> = ({ projectData }) => {
  const project = JSON.parse(projectData);
  useEffect(() => {
    getData();
    console.log("projcet", project);
  }, []);
  return (
    <div>
      <h1>{project.data.Movie.title}</h1>
    </div>
  );
};

// Get static props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} };
  console.log("running");
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

  // Data fetching
  const response = await querySanity(query, variables);
  console.log(response);

  return {
    props: {
      projectData: JSON.stringify(response.data),
    },
  };
};

// Dynamically create paths
export const getStaticPaths: GetStaticPaths = async () => {
  const query = `
    query {
      allMovie {
        slug {
          current
        }
        _id
      }
    }`;

  try {
    const response = await querySanity(query);
    const {
      data: { data: projects },
    } = response;

    const paths = projects.allMovie.map(
      ({ slug, id }: { slug: { current: string }; id: string }) => ({
        params: { slug: slug.current || "", id },
      })
    );
    console.log(paths);

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    return {
      paths: [
        {
          params: { slug: "hey" },
        },
      ],
      fallback: false,
    };
  }
};

export default ProductPage;
