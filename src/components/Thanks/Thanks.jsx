import icon from '../../assets/images/illustration-thank-you.svg'
import style from './Thanks.module.scss'

import { useLocation } from 'react-router-dom'

const Thanks = () => {
    const location = useLocation()

    return (
        <div className={style.thanks}>
            <img src={icon} alt="icon" />
            <div className={style.selected_choice}>
                You selected {location.state.rating} out off 5
            </div>
            <h1 className="title">Thank you!</h1>
            <p className="sub-title">We appreciate you taking the time to give a rating. If you ever need more support, dont`t hesitate to get in touch!</p>
        </div>
    )
}
export default Thanks