import React from 'react';
import styles from "./VehicleOrderButton.module.scss";

/**
 * Review: Étant donné que le bouton `Reset order` et `Only black & white`
 * servent tous les deux à trier la couleur. J'ai faits le choix de les
 * rassembler dans un seul composant.
 * 
 * Fix: Le `cursor:pointer` était présent seulement quand la liste
 * n'était pas filtrée par couleur. J'ai donc ajouté la classe `filterButton`
 * qui le rajoute pour les deux styles de bouton
 */
const VehicleOrderButton = ({ order, ...other }) => (
  <button
    className={`${styles.filterButton} ${order ? styles.ordered : ''}`}
    {...other}
  >
    {order ? 'Reset order': 'Only black & white'}
  </button>
);

export default React.memo(VehicleOrderButton);