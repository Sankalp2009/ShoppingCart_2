import { useEffect } from 'react'
import { getApi } from '../Helpers/Api'
import { useDispatch, useSelector } from 'react-redux'
import { Action_Type } from '../Redux/data_reducer/Action'
import Product from '../Component/Product'

function Dashboard() {
  const dispatch = useDispatch()
  const { isLoading, isError, error, items } = useSelector((state) => state)

  useEffect(() => {
    dispatch({
      type: Action_Type.Get_Request,
    })
    getApi('https://dummyjson.com/products')
      .then((data) => {
        if (!data?.status) throw new Error('Data not fetch')
        let product = data?.data?.products
        dispatch({
          type: Action_Type.Get_Success,
          payload: product,
        })
      })
      .catch((err) => {
        dispatch({
          type: Action_Type.Get_Failure,
          payload: err,
        })
      })
  }, [dispatch])

  return (
    <div>
      {isLoading && <h2>Loading</h2>}
      {!isLoading && isError && <h2>{error}</h2>}
      <Product data={items} />
    </div>
  )
}

export default Dashboard