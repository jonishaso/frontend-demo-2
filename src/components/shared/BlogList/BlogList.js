import Grid from "@material-ui/core/Grid";
import React from "react";

import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => (
  <Grid
    container
    spacing={2}
    alignItems="flex-start"
    justify="center"
  >
    {blogs.map(({ body, id, title, userId }) => (
      <BlogItem
        body={body}
        id={id}
        key={id}
        title={title}
        userId={userId}
      />
    ))}
  </Grid>
);

export default BlogList;
