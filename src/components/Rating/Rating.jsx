import { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import icon from '../../assets/images/icon-star.svg'
const Rating = () => {
    const [active, setActive] = useState('1');

    const handleFocus = (e) => {
        setActive(e.target.value)
    }
    return (
        <Fragment>
            <div className="circle">
                <img src={icon} alt="icon" />
            </div>
            <h1 className="title">How did we do?</h1>
            <p className="sub-title">Please let us know how we did with your support request. All feedback is
                appreciated to
                help us improve our offering!
            </p>
            <div className="rating-choice">
                <button onFocus={handleFocus} value='1' className={'1' === active ? "circle active" : "circle"}>
                    <span>1</span>
                </button>
                <button onFocus={handleFocus} value='2' className={'2' === active ? "circle active" : "circle"}>
                    <span>2</span>
                </button>
                <button onFocus={handleFocus} value='3' className={'3' === active ? "circle active" : "circle"}>
                    <span>3</span>
                </button>
                <button onFocus={handleFocus} value='4' className={'4' === active ? "circle active" : "circle"}>
                    <span>4</span>
                </button>
                <button onFocus={handleFocus} value='5' className={'5' === active ? "circle active" : "circle"}>
                    <span>5</span>
                </button>
            </div>
            <Link to='/thanks' state={{ rating: active }}>
                <form>
                    <button className="submit">
                        submit
                    </button>
                </form>
            </Link>
        </Fragment >
    )
}
export default Rating