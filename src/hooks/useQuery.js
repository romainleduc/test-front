import React from 'react';

function fetchReducer(state, action) {
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

const initialState = {
  error: null,
  data: null,
  loading: false,
}

const useQuery = (url) => {
  const [{ error, data, loading }, dispatch] = React.useReducer(
    fetchReducer,
    initialState,
  );

  React.useEffect(() => {
    dispatch({ type: 'FETCHING', loading: true });

    fetch(`https://random-data-api.com/api${url}`)
    .then(async response =>
      dispatch({ type: 'SUCCESS', data: await response.json() })
    )
    .catch(error =>
      dispatch({ type: 'ERROR', error })
    );
  }, [url]);

  return { error, data, loading };
}

export default useQuery;