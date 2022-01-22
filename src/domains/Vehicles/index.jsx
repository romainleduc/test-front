import React, { useState } from "react";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import useQuery from "../../hooks/useQuery";
import styles from "./VehiclesIndex.module.scss";

const VehiculeIndex = () => {
  // Review: Ici j'ai remplacé le hook useState par un custom hook qui utilise useReducer, qui est plus adapté pour faire des requêtes
  const { data, loading } = useQuery('/vehicle/random_vehicle?size=10');
  // Fix: Ici j'ai remplacé la variable par une variable d'état pour permettre à la vue de se ré rendre
  const [order, setOrder] = useState(false);

  const handleClick = () => {
    setOrder(!order);
  }

  if (loading) {
    return <>loading</>;
  }

  if (!data) {
    return <>error</>;
  }

  if (order) {
    return (
      <>
        <h3>My garage</h3>
        <div className={styles.actionsContainer}>
          <button onClick={handleClick}>Reset order</button>
        </div>
        <div className={styles.cardsContainer}>
          {data.map((car) => {
            // Fix: Ici je return null plutôt qu'un fragment, pour signifier qu'il n'y a pas de composant à rendre
            if (car.color !== "Black" && car.color !== "White") {
              return null;
            }

            return <VehicleCard key={car.id} vehicle={car} />;
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <h3>My garage</h3>
      <div className={styles.actionsContainer}>
        <button
          style={{ border: "red 1px solid", cursor: "pointer" }}
          onClick={handleClick}
        >
          Only black & white
        </button>
      </div>
      <div className={styles.cardsContainer}>
        {data.map((car) => (
          <VehicleCard key={car.id} vehicle={car} />
        ))}
      </div>
    </>
  );
};

export default VehiculeIndex;
