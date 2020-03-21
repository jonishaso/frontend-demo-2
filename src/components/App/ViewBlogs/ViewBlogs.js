import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import React, { useEffect } from "react";

import BlogList from "#components/shared/BlogList";
import useJSONPlaceHolder from "#helpers/useJSONPlaceHolder";

import PageButtons from "./PageButtons";

const ITEMS_PER_PAGE = 9;

const ViewBlogs = ({ history, match: { params } }) => {
  const pageNumber = Number(params.pageNumber || 1);

  const { data: blogs, loading } = useJSONPlaceHolder({
    path: "/posts/"
  });

  useEffect(() => {
    if (
      Array.isArray(blogs) &&
      (pageNumber < 1 ||
        pageNumber >
          Math.ceil(blogs.length / ITEMS_PER_PAGE))
    ) {
      history.push("/page-1");
    }
  }, [blogs]);

  return (
    <Container maxWidth="md">
      {(() => {
        if (loading) return <CircularProgress />;
        const startIndex =
          (pageNumber - 1) * ITEMS_PER_PAGE;
        const pageBlogs = blogs.slice(
          startIndex,
          startIndex + ITEMS_PER_PAGE
        );
        return <BlogList blogs={pageBlogs} />;
      })()}
      <PageButtons
        onNextClick={() => {
          if (
            pageNumber >=
            Math.ceil(blogs.length / ITEMS_PER_PAGE)
          )
            return;
          history.push("/page-" + (pageNumber + 1));
        }}
        onPreviousClick={() => {
          if (pageNumber <= 1) return;
          history.push("/page-" + (pageNumber - 1));
        }}
      />
    </Container>
  );
};

export default ViewBlogs;
