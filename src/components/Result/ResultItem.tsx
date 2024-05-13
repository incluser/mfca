import React from "react";
import "./ResultItem.css"
import { ResultItemProps } from "../../types/types";
import { useTranslation } from "react-i18next";

const ResultItem: React.FC<ResultItemProps> = ({ text, value }) => {
    const { t } = useTranslation();
    return (
        <div className="rowresult">
            <span>{t(text)}</span>
            <p>{(value / 1000).toFixed(2)} {t('ton')} CO₂</p>
        </div>
    )
}

export default ResultItem