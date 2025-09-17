import React from "react";
import { EQUIPMENT_LIST_ITEMS } from "./EquipmentData";
import EquipmentList from "./EquipmentList";

const Equipment = () => {
  return <EquipmentList equipmentListItems={EQUIPMENT_LIST_ITEMS} />;
};

export default Equipment;
