import React from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';
import styles from "./VehicleList.module.scss";

/**
 * Review: Ici j'ai créé un composant qui s'occupe seulement d'afficher
 * la liste des voitures pour séparer les comportements.
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
  
          return <VehicleCard key={car.id} vehicle={car} />;
        })
      }
      {!order &&
        vehicles?.map(car => (
          <VehicleCard key={car.id} vehicle={car} />
        ))
      }
    </div>
  </>
);

export default VehicleList;