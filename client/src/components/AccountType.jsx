import { useState } from "react";
import "./AccountType.css";

const AccountType = () => {
   const [accountType, setAccountType] = useState("individual");
  return (
    <div className="account-type">
      <label className={accountType === "individual" ? "selected" : ""}>
        <input
          type="radio"
          value="individual"
          checked={accountType === "individual"}
          onChange={() => setAccountType("individual")}
        />
        Individual
      </label>
      <label className={accountType === "healthcare" ? "selected" : ""}>
        <input
          type="radio"
          value="healthcare"
          checked={accountType === "healthcare"}
          onChange={() => setAccountType("healthcare")}
        />
        Healthcare Services
      </label>
    </div>
  );
};

export default AccountType;
