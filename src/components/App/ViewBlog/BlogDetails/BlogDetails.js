import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import UserName from "#components/shared/UserName";

const useStyles = makeStyles({
  root: { padding: "20px" }
});

const BlogDetails = ({
  blog: { id, userId, title, body }
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography gutterBottom variant="h5" component="h3">
        {`#${id} - ${title}`}
      </Typography>
      <Typography gutterBottom variant="h5" component="h3">
        <UserName userId={userId} />
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {body}
      </Typography>
    </Paper>
  );
};

export default BlogDetails;
