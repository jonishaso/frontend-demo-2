import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";

import puppy from "#assets/puppy.jpg";
import UserName from "#components/shared/UserName";

const useStyles = makeStyles({
  card: {
    height: 400,
    maxWidth: 345
  },
  media: {
    height: 140
  },
  root: { marginBottom: "30px", marginTop: "30px" },
  textContent: {
    height: 185,
    overflow: "scroll"
  }
});

const BlogItem = ({ body, id, title, userId }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={puppy}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.textContent}>
            <Typography
              gutterBottom
              variant="h5"
              component="h4"
            >
              {`#${id} - ${title}`}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link
            color="primary"
            size="small"
            to={`/user/${userId}`}
          >
            <UserName userId={userId} />
          </Link>
          <Link to={`/blog/${id}`}>More>></Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BlogItem;
