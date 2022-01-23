import React from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';
import styles from "./VehicleList.module.scss";

/**
 * Review: Ici j'ai créé un composant qui s'occupe seulement d'afficher
 * la liste des voitures pour séparer les comportements.
 *
 * Fix: Au moment du map je me suis servi de l'uid des véhicules pour
 * le passer à la propriété key parce que leur id n'est pas unique
 */
const VehicleList = ({ vehicles, actions, loading, order }) => (
  <>
    <div className={styles.actionsContainer}>
      {actions}
    </div>
    <div className={styles.cardsContainer}>
      {loading && (
        <>loading</>
      )}
      {order &&
        vehicles?.map(car => {
          // Review: Ici je return null plutôt qu'un fragment, pour signifier
          // qu'il n'y a pas de composant à rendre
          if (car.color !== "Black" && car.color !== "White") {
            return null;
          }
  
          return <VehicleCard key={`vehicule-${car.uid}`} vehicle={car} />;
        })
      }
      {!order &&
        vehicles?.map(car => (
          <VehicleCard key={`vehicule-${car.uid}`} vehicle={car} />
        ))
      }
    </div>
  </>
);

export default VehicleList;