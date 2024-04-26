import React from "react";
import "./ResultItem.css"
import { ResultItemProps } from "../../types/types";
import { useTranslation } from "react-i18next";

const ResultItem: React.FC<ResultItemProps> = ({ text, value }) => {
    const { t } = useTranslation();
    return (
        <div className="rowresult">
            <span>{t(text)}</span>
            <p>{value.toFixed(2)} {t('kg')} CO₂</p>
        </div>
    )
}

export default ResultItem