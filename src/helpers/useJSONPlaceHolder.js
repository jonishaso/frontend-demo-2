import { CancelToken, isCancel } from "axios";
import { useEffect, useState } from "react";

import { jsonPlaceHolder } from "#api";

const memoizedStorage = {};

const useJSONPlaceHolder = ({ memoize = false, path }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (memoize && memoizedStorage.hasOwnProperty(path)) {
      memoizedStorage[path].then(res => {
        setData(res.data);
      });

      return;
    }

    const source = CancelToken.source();

    const promise = jsonPlaceHolder
      .get(path, {
        cancelToken: source.token
      })
      .then(res => {
        setData(res.data);
        return res;
      })
      .catch(e => {
        if (isCancel(e)) return;
        throw e;
      });

    if (memoize) memoizedStorage[path] = promise;

    return () => {
      source.cancel();
    };
  }, []);

  return {
    data,
    loading: data === null
  };
};

export default useJSONPlaceHolder;
