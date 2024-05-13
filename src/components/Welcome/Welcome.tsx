import Calc from "../../assets/img/calc.svg"
import "./Welcome.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { setStartDate, setEndDate } from '../../store/slices/Date.slice';
import { useState } from "react"
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { ru } from 'date-fns/locale/ru';
import { es } from 'date-fns/locale/es';
import { useTranslation } from "react-i18next";
import { t } from "i18next";
registerLocale('en', es)
registerLocale('ru', ru)
setDefaultLocale('es')

const Welcome = () => {
    const { i18n } = useTranslation();
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    const dispatch = useDispatch();
    const currentLanguage = i18n.language;

    return (
        <div className="welcome-container">
            <div className="welcome-static">
                <img width={100} src={Calc} alt="" />
                <div className="welcome-text">
                    <span className="welcome-title">{t("Welcome to the carbon footprint calculator")}</span>
                    <span className="weclome-subtitle" style={{ marginTop: "20px" }}>
                        <span>{t("Carbon footprint calculations are typically based on annual emissions over the previous 12 months.")}</span>
                        <br />
                        <br />
                        {
                            t("Next, select the appropriate tab above to calculate emissions for the aspect of life you're interested in, such as air travel.Or complete each tab to determine your full carbon footprint.:")
                        }
                    </span>
                </div>
            </div>
            <div className="date-container">
                <div className="welcome-date from">
                    <span>{t("From Time")}</span>
                    <DatePicker
                        className="date-picker"
                        locale={currentLanguage == 'EN' ? 'es' : 'ru'}
                        selected={start}
                        onChange={(date: Date) => {
                            setStart(date)
                            dispatch(setStartDate(date))
                        }}
                    />
                </div>
                <div className="welcome-date to">
                    <span>{t("To Time")}</span>
                    <DatePicker
                        className="date-picker"
                        locale={currentLanguage === 'EN' ? 'es' : 'ru'}
                        selected={end}
                        onChange={(date: Date) => {
                            setEnd(date)
                            dispatch(setEndDate(date))
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Welcome
