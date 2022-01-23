import { API_URL } from "../constants";

// Function qui fait une demande à l'API en mettant à jour le state
// à l'aide du dispatch passé en paramètre. Et retourne une nouvelle
// promesse pour renvoyer uniquement la valeur.
const fetchAction = (url, dispatch) => {
  dispatch({ type: 'FETCHING', loading: true });

  return new Promise((resolve, eject) => {
    fetch(API_URL + url)
    .then(async response => {
      const data = await response.json();
      dispatch({ type: 'SUCCESS', data })
      return resolve(data);
    })
    .catch(error => {
      dispatch({ type: 'ERROR', error });
      return eject(null);
    });
  });
}

export default fetchAction;