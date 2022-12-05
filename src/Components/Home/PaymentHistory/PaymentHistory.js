import React from "react";
import PaymentHistoryTable from "./PaymentHistoryTable";

const PaymentHistory = () => {
  return (
    <div>
      <div style={{ width: "100%" }} className="mb-5 mt-2">
        {/* <AddSection></AddSection> */}
        <PaymentHistoryTable />
      </div>
    </div>
  );
};

export default React.memo(PaymentHistory);
