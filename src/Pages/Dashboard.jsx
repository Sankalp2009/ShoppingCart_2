import { useEffect } from 'react'
import { getApi } from '../Helpers/Api'
import { useDispatch, useSelector } from 'react-redux'
import { Action_Type } from '../Redux/data_reducer/Action'
import Product from '../Component/Product'

function Dashboard({ query }) {
  const dispatch = useDispatch()
  const { isLoading, isError, error, items } = useSelector(
    (state) => state.Product
  )
  useEffect(() => {
    const controller = new AbortController();
  
    const timerID = setTimeout(async () => {
      const trimmed = query.trim();
  
      dispatch({ type: Action_Type.Get_Request });
  
      try {
        const url = trimmed
          ? `https://dummyjson.com/products/search?q=${trimmed}`
          : "https://dummyjson.com/products";
  
        const data = await getApi(url, {
          signal: controller.signal,
        });
  
        if (!data?.status) throw new Error("Data not fetched");
  
        dispatch({
          type: Action_Type.Get_Success,
          payload: data.data.products,
        });
      } catch (err) {
        if (err.name === "AbortError") return;
  
        dispatch({
          type: Action_Type.Get_Failure,
          payload: err.message,
        });
      }
    }, 500);
  
    return () => {
      clearTimeout(timerID);
      controller.abort();
    };
  }, [query, dispatch]);

  return (
    <div>
      {isLoading && <h2>Loading</h2>}
      {!isLoading && isError && <h2>{error}</h2>}
      <Product data={items} />
    </div>
  )
}

export default Dashboard
