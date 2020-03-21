import Typography from "@material-ui/core/Typography";
import React from "react";

import useJSONPlaceHolder from "#helpers/useJSONPlaceHolder";

const UserName = ({ userId }) => {
  const { data: user, loading } = useJSONPlaceHolder({
    memoize: true,
    path: `/users/${userId}`
  });

  return (
    <Typography component="p">
      Author: {loading ? "Loading..." : user.name}
    </Typography>
  );
};

export default UserName;
