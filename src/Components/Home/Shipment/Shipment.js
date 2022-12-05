import React from "react";
import ShipmentTable from "./ShipmentTable";

const Shipment = () => {
  return (
    <div>
      <div style={{ width: "100%" }} className="mb-5 mt-2">
        {/* <AddSection></AddSection> */}
        <ShipmentTable />
      </div>
    </div>
  );
};

export default React.memo(Shipment);
