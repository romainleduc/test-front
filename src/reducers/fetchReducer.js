const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        error: null,
        data: action.data,
        loading: false,
      }
    }
    case 'ERROR': {
      return {
        error: action.error,
        data: null,
        loading: false,
      }
    }
    case 'FETCHING': {
      return {
        ...state,
        loading: action.loading,
      }
    }
    default: {
      return state
    }
  }
}

export default fetchReducer;