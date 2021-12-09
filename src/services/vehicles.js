const getVehicles = async () => {
  const response = await fetch(
    "https://random-data-api.com/api/vehicle/random_vehicle?size=10"
  );
  const vehicles = await response.json();
  console.log("debug", vehicles);
  return vehicles;
};

export { getVehicles };
