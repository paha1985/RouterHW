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
    getData().then((d) => {
      d.results ? setData(d.results) : setData([d]);
      setLoading(false);
    });
  }, [url, page, param]);

  return { data, loading };
};
