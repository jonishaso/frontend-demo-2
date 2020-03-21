import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  root: { padding: "20px" }
});

const CommentList = ({ comments }) => {
  const classes = useStyles();
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
        >
          Comments
        </ListSubheader>
      }
      className={classes.root}
    >
      {comments.map(({ body, email, id }) => (
        <ListItem key={id} button>
          <ListItemAvatar>
            <Avatar>{email.slice(0, 1)}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={body} />
        </ListItem>
      ))}
    </List>
  );
};

export default CommentList;
