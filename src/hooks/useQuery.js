import React from 'react';
import fetchAction from '../actions/fetchAction';
import fetchReducer from '../reducers/fetchReducer';

const useQuery = (url) => {
  const [{ error, data, loading }, dispatch] = React.useReducer(
    fetchReducer,
    {
      error: null,
      data: null,
      loading: false,
    },
  );
  // Référence qui me permet de sauvegarder les données de la première requête
  const currentDataRef = React.useRef(null);

  // Fait une nouvelle requête à l'api seulement quand l'URL change
  React.useEffect(() => {
    fetchAction(url, dispatch)
      .then(data => currentDataRef.current = data)
      .catch(data => currentDataRef.current = data);
  }, [url]);

  // Utilise les données sauvegarder par la référence pour filtrer la liste
  // et mettre à jour le state (J'ai utilisé un useCallback ici étant donné que le hook se ré-rend assé
  // souvent cela permet de créer la méthode qu'une seule fois)
  const refetch = React.useCallback((filters) => {
    let currentData = currentDataRef.current;

    dispatch({ type: 'LOADING', loading: true });

    // S'il n'y a pas de demande filtres, je renvoie toutes les données sauvegardées
    // par la référence `currentDataRef` sans passer par la méthode de filtre
    if (filters.mileageGte || filters.mileageLte) {
      currentData = currentData?.filter(item =>
        (!filters.mileageGte || item.mileage >= filters.mileageGte)
        && (!filters.mileageLte || item.mileage <= filters.mileageLte)
      );
    }

    dispatch(
      {
        type: 'SUCCESS',
        data: currentData
      }
    );
  }, [dispatch]);

  return [
    { error, data, loading },
    refetch
  ]
}

export default useQuery;