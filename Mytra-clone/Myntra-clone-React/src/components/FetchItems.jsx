import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/ItemSlice";
import { FetchStatusActions } from "../store/FetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(FetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(FetchStatusActions.markFetchDone());

        dispatch(FetchStatusActions.markFetchingDone());

        dispatch(itemsActions.addInitialItems(items[0]));
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);
  return (
    <>
    </>
  );
};

export default FetchItems;
