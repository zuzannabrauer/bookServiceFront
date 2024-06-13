import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import {faHeart as faHeartRegular} from "@fortawesome/free-regular-svg-icons";
import {useDispatch} from "react-redux";
import {editInFavourites} from "../../store/thunks.js";
import './FavouritesIcon.css'

export const FavouritesIcon = ({ id, isInFavourites }) => {
    const dispatch = useDispatch()

    const setIsInFavourites = () => {
        dispatch(editInFavourites({ id, isInFavourites: !isInFavourites }))
    }

    return (
        <FontAwesomeIcon size="2xl" icon={isInFavourites ? faHeartSolid : faHeartRegular}
                         className="favouritesIcon"
                         style={{ color: isInFavourites ? 'pink' : 'white' }}
                         onClick={setIsInFavourites}/>
    )    
}
