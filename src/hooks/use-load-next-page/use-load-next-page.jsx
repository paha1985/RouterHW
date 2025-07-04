import { useCallback, useRef } from "react";

export const useLoadNextPage = (loading, hasMore, setPageNumber) => {
  const observer = useRef();
  const lastNodeRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevState) => prevState + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore, setPageNumber]
  );
  return lastNodeRef;
};
