import React from "react";
import "./ResultItem.css"
import { ResultItemProps } from "../../types/types";

const ResultItem: React.FC<ResultItemProps> = ({ text, value }) => {
    return (
        <div className="rowresult">
            <span>{text}</span>
            <p>{value} tCO₂</p>
        </div>
    )
}

export default ResultItem