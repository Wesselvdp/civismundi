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
    Project(id: $id) {
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
  const project = JSON.parse(projectData).data.allProject[0];
  useEffect(() => {
    console.log("projecet", project);
  }, []);
  return (
    <div>
      {" "}
      <h1>{project.title}</h1>
    </div>
  );
};

// Get static props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} };
  console.log("running");

  const query = `
  query($slug: String!) {
    allProject(
      where: {
        slug: {
          current: {matches: $slug}
        }
      }
    ) {
      slug {
        current
      }
      title
      _id
    }
  }`;

  console.log("params:", params);
  const variables = {
    slug: params.slug,
  };

  // Data fetching
  const response = await querySanity(query, variables);
  // console.log(response.data);

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
      allProject {
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

    const paths = projects.allProject.map(
      ({ slug }: { slug: { current: string } }) => ({
        params: { slug: slug.current },
      })
    );

    console.log(paths);

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
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
