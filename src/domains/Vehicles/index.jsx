import React, { useCallback, useState } from "react";
import Drawer from "../../components/shared/Drawer/Drawer";
import Select from "../../components/shared/Select/Select";
import Option from "../../components/shared/Option/Option";
import VehicleList from "../../components/VehicleList/VehicleList";
import VehicleOrderButton from "../../components/VehicleOrderButton/VehicleOrderButton";
import useQuery from "../../hooks/useQuery";
import styles from "./index.module.scss";
import Stack from "../../components/shared/Stack/Stack";

const VehiculeIndex = () => {
  // Review: Ici j'ai remplacé le hook useState par un hook personnalisé
  // qui utilise useReducer, qui est plus adapté pour faire des requêtes
  const [{ data, error, loading }, refetchWithFilters] = useQuery('/vehicle/random_vehicle?size=100');
  // Fix: Ici j'ai remplacé la variable par une variable d'état pour
  // permettre à la vue de se ré-rendre
  const [order, setOrder] = useState(false);
  // Feat: Contient la liste des filtres
  const [filters, setFilters] = useState({
    mileageGte: 0,
    mileageLte: 0,
  });

  // J'ai ajouté un useCallback pour éviter de recrée la méthode lorsque
  // le state filters ré-rend le composant et aussi pour ne pas casser
  // le React.memo du composant `VehicleOrderButton`
  const handleClick = useCallback(() => {
    setOrder(!order);
  }, [order])

  // J'ai ajouté un useCallback pour éviter de recrée la méthode lorsque
  // le state order ré-rend le composant.
  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setFilters({
      ...filters,
      [name]: +value,
    });

    // La valeur 0 est remplacée par null pour que le filtre ne la prenne
    // pas comme une valeur à analyser
    refetchWithFilters({
      ...filters,
      [name]: value === '0' ? null : +value,
    });
  }, [filters, refetchWithFilters, setFilters]);

  if (error) {
    return <>error</>;
  }

  return (
    <div>
      <h3>My garage</h3>
      <Drawer title="Search car">
        <VehicleOrderButton className={styles.drawerItem} order={order} onClick={handleClick} />
        <span>Mileage</span>
        <Stack className={styles.drawerItem}>
          <Select
            value={filters.mileageGte}
            name="mileageGte"
            onChange={handleChange}
          >
            <Option value={0} label="Mileage min" />
            <Option value={10000} label="10 000" />
            <Option value={20000} label="20 000" />
            <Option value={30000} label="30 000" />
            <Option value={40000} label="40 000" />
            <Option value={50000} label="50 000" />
          </Select>
          <Select
            value={filters.mileageLte}
            name="mileageLte"
            onChange={handleChange}
          >
            <Option value={0} label="Mileage max" />
            <Option value={10000} label="10 000" />
            <Option value={20000} label="20 000" />
            <Option value={30000} label="30 000" />
            <Option value={40000} label="40 000" />
            <Option value={50000} label="50 000" />
          </Select>
        </Stack>
      </Drawer>
      <div className={styles.pageContainer}>
        <VehicleList
          loading={loading}
          vehicles={data}
          order={order}
        />
      </div>
    </div>
  );
};

export default VehiculeIndex;
