import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import useJSONPlaceHolder from "#helpers/useJSONPlaceHolder";

import BlogDetails from "./BlogDetails";
import CommentList from "./CommentList";

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "40px auto",
    boxShadow: "none"
  },
  item: {
    margin: "30px"
  }
});

const ViewBlog = ({
  match: {
    params: { blogId }
  }
}) => {
  const classes = useStyles();

  const blogRequest = useJSONPlaceHolder({
    path: `/posts/${blogId}`
  });
  const commentsRequest = useJSONPlaceHolder({
    path: `/comments?postId=${blogId}`
  });

  if (blogRequest.loading || commentsRequest.loading)
    return <CircularProgress />;

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.item} item xs={12}>
        <BlogDetails blog={blogRequest.data} />
      </Grid>
      <Grid className={classes.item} item xs={12}>
        <CommentList comments={commentsRequest.data} />
      </Grid>
    </Grid>
  );
};

export default ViewBlog;
