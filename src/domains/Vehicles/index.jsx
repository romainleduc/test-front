import React, { useEffect, useState } from "react";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import { getVehicles } from "../../services/vehicles";
import styles from "./VehiclesIndex.module.scss";

const VehiculeIndex = () => {
  const [cars, setCars] = useState(null);
  // Fix: Ici j'ai remplacé la variable par une variable d'état pour permettre à la vue de se ré rendre
  const [order, setOrder] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      setCars(await getVehicles());
    };
    fetchCars();
  }, []);

  const handleClick = () => {
    setOrder(!order);
  }

  if (!cars) {
    return <>loading</>;
  }

  if (order) {
    return (
      <>
        <h3>My garage</h3>
        <div className={styles.actionsContainer}>
          <button onClick={handleClick}>Reset order</button>
        </div>
        <div className={styles.cardsContainer}>
          {cars.map((car) => {
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
        {cars.map((car) => (
          <VehicleCard key={car.id} vehicle={car} />
        ))}
      </div>
    </>
  );
};

export default VehiculeIndex;
