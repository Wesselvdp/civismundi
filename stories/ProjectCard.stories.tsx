import * as React from "react";
import { storiesOf } from "@storybook/react";

// Components
import PostCard from "@co@/src/components/project/ProjectCard
import PostGrid from "@/components/post/PostGrid";
storiesOf("Posts", module).add("Single post", () => {
  return (
    <>
      <PostCard project="{}" />
    </>
  );
});
storiesOf("Posts", module).add("Post grid", () => {
  return (
    <>
      <PostGrid />
    </>
  );
});
