import { useEffect, useState } from "react";

export const useGetData = (url, page, param) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const getData = async () => {
    const res = await fetch(
      `${url}${param ? `/${param}` : ""}${page ? `?page=${page}` : ""}`
    );

    return res.json();
  };

  useEffect(() => {
    getData()
      .then((d) => {
        if (d.info) {
          if (d.info.pages >= page) {
            setData(data.concat(d.results));
          }
          setLoading(false);
          setHasMore(d.info.pages > page);
        } else {
          setData([d]);
        }
      })
      .catch((e) => {
        setHasMore(false);
        return;
      });
  }, [url, page, param]);

  return { data, loading, hasMore };
};
