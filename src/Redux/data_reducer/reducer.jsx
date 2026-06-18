const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  items: [],
}

const reducer = (currentState = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'Get_Request':
      return {
        ...currentState,
        isLoading: true,
        isError: false,
        error: null,
      }

    case 'Get_Success':
      return {
        ...currentState,
        isLoading: false,
        isError: false,
        error: null,
        items: payload,
      }

    case 'Get_Failure':
      return {
        ...currentState,
        isLoading: true,
        isError: false,
        error: payload,
        items: [],
      }

    default:
      return currentState
  }
}

export { reducer }