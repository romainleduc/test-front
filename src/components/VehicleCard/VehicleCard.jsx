import React from 'react';
import style from "./VehicleCard.module.scss";

/**
 * Review: Ici j'ai remplacé le mot-clé let par const
 */
const VehicleCard = (props) => (
  <div className={style.container}>
    <div>
      #{props.vehicle.id} - {props.vehicle.make_and_model} (
      {props.vehicle.color})
    </div>
    {props.vehicle.doors < 2 && <div>{props.vehicle.doors} door</div>}
    {props.vehicle.doors >= 2 && <div>{props.vehicle.doors} doors</div>}
    <div>{props.vehicle.mileage} miles</div>
  </div>
);

export default React.memo(VehicleCard);
