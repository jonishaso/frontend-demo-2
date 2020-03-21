import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import React from "react";

import BlogList from "#components/shared/BlogList";
import useJSONPlaceHolder from "#helpers/useJSONPlaceHolder";

import UserDetails from "./UserDetails";

const ViewUser = ({
  match: {
    params: { userId }
  }
}) => {
  const {
    data: user,
    loading: userLoading
  } = useJSONPlaceHolder({
    memoize: true,
    path: `/users/${userId}`
  });
  const {
    data: userBlogs,
    loading: userBlogsLoading
  } = useJSONPlaceHolder({
    memoize: true,
    path: `/posts?userId=${userId}`
  });

  return userLoading || userBlogsLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      spacing={2}
      alignItems="flex-start"
      justify="spread-around"
    >
      <Grid item md={4} sm={12}>
        <UserDetails user={user} />
      </Grid>
      <Grid item md={8} sm={12}>
        <BlogList blogs={userBlogs} />
      </Grid>
    </Grid>
  );
};

export default ViewUser;
