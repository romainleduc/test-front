import React, { useEffect, useState } from "react";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import { getVehicles } from "../../services/vehicles";
import styles from "./VehiclesIndex.module.scss";

const VehiculeIndex = () => {
  const [cars, setCars] = useState(null);
  let order = false;

  useEffect(() => {
    const fetchCars = async () => {
      setCars(await getVehicles());
    };
    fetchCars();
  }, []);

  if (!cars) {
    return <>loading</>;
  }

  if (order) {
    return (
      <>
        <h3>My garage</h3>
        <div className={styles.actionsContainer}>
          <button onClick={() => (order = false)}>Reset order</button>
        </div>
        <div className={styles.cardsContainer}>
          {cars.map((car) => {
            if (car.color !== "Black" && car.color !== "White") return <> </>;
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
          onClick={() => (order = true)}
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
