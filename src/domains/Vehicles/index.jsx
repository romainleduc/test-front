import React, { useState } from "react";
import VehicleFilter from "../../components/VehicleFilter/VehicleFilter";
import VehicleList from "../../components/VehicleList/VehicleList";
import VehicleOrderButton from "../../components/VehicleOrderButton/VehicleOrderButton";
import useQuery from "../../hooks/useQuery";

const VehiculeIndex = () => {
  // Review: Ici j'ai remplacé le hook useState par un hook personnalisé
  // qui utilise useReducer, qui est plus adapté pour faire des requêtes
  const [{ data, error, loading }, refetchWithFilters] = useQuery('/vehicle/random_vehicle?size=10');
  // Fix: Ici j'ai remplacé la variable par une variable d'état pour
  // permettre à la vue de se ré-rendre
  const [order, setOrder] = useState(false);
  // Feat: Contient la liste des filtres
  const [filters, setFilters] = useState({
    mileageGte: 0,
    mileageLte: 0,
  });

  const handleClick = () => {
    setOrder(!order);
  }

  const handleChange = (event) => {
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
  }

  if (error) {
    return <>error</>;
  }

  return (
    <>
      <h3>My garage</h3>
      <VehicleList
        loading={loading}
        vehicles={data}
        order={order}
        actions={
          <>
            <VehicleOrderButton order={order} onClick={handleClick} />
            <VehicleFilter
              value={filters.mileageGte}
              name="mileageGte"
              label="À partir de"
              onChange={handleChange}
            >
              <option value={0}>Tout</option>
              <option value={30000}>30 000</option>
              <option value={100000}>100 000</option>
            </VehicleFilter>
            <VehicleFilter
              value={filters.mileageLte}
              name="mileageLte"
              label="Jusqu'à"
              onChange={handleChange}
            >
              <option value={0}>Tout</option>
              <option value={30000}>30 000</option>
              <option value={100000}>100 000</option>
            </VehicleFilter>
          </>
        }
      />
    </>
  );
};

export default VehiculeIndex;
