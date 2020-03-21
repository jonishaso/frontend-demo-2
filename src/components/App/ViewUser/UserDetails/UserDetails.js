import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import PhoneIcon from "@material-ui/icons/LocalPhone";
import WebIcon from "@material-ui/icons/Web";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const UserDetails = ({ user }) => {
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
          User Details
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemAvatar>
          <Avatar>{user.name.slice(0, 1)}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={user.name} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FingerprintIcon />
        </ListItemIcon>
        <ListItemText primary={user.id} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PhoneIcon />
        </ListItemIcon>
        <ListItemText primary={user.phone} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary={user.email} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WebIcon />
        </ListItemIcon>
        <ListItemText primary={user.website} />
      </ListItem>
    </List>
  );
};

export default UserDetails;
