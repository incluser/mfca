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
                    <span className="weclome-subtitle">
                        {
                            t("Carbon footprint calculations are typically based on annual emissions from the previous 12 months Enter the period this calculation covers (optional):")
                        }
                    </span>
                </div>
            </div>
            <div className="date-container">
                <div className="welcome-date from">
                    <span>From</span>
                    <DatePicker
                        className="date-picker"
                        locale={currentLanguage === 'RU' ? 'ru' : 'es'}
                        selected={start}
                        onChange={(date: Date) => {
                            setStart(date)
                            dispatch(setStartDate(date))
                        }}
                    />
                </div>
                <div className="welcome-date to">
                    <span>To</span>
                    <DatePicker
                        className="date-picker"
                        locale={currentLanguage === 'RU' ? 'ru' : 'es'}
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
