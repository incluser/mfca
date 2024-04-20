import { PublicTransport } from "../../constants/static";
import RowItem from "./RowItem";

const Public = () => {
  return (
    <div className="publiccontainer">
      {PublicTransport.map((field, index) => {
        return <RowItem key={index} field={field} />;
      })}
    </div>
  );
};

export default Public;
