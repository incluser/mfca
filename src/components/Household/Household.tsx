import { Fields } from "../../constants/static";
import "./Household.css";
import RowItem from "./RowItem";
const Household = () => {
  return (
    <div className="housecontainer">
      {Fields.map((field, index) => {
        return <RowItem key={index} field={field} />;
      })}
    </div>
  );
};

export default Household;
