import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import ViewBlog from "./ViewBlog";
import ViewBlogs from "./ViewBlogs";
import ViewUser from "./ViewUser";

const App = () => (
  <Router>
    <Route exact path="/" component={ViewBlogs} />
    <Route
      exact
      path="/page-:pageNumber([0-9]+)"
      component={ViewBlogs}
    />
    <Route
      exact
      path="/user/:userId"
      component={ViewUser}
    />
    <Route
      exact
      path="/blog/:blogId"
      component={ViewBlog}
    />
  </Router>
);

export default App;
