import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faImage} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import './ImageInput.css'

export const ImageInput = ({ defaultValue, onChange }) => {
    const [ image, setImage ] = useState(defaultValue)
    const [ isBroken, setIsBroken ] = useState(false)

    const updateFileInput = e => {
        onChange(e.target.files[0])
        const r = new FileReader()
        r.readAsDataURL(e.target.files[0])
        r.onloadend = ev => setImage(ev.target.result.toString())
        setIsBroken(false)
    }

    const resetImageInput = event => {
        event.preventDefault()
        setImage(undefined)
        onChange(undefined)
    }

    return (
        <>
            <label htmlFor="image" className="imageInput__label">
                {!isBroken && image ?
                    <>
                        <img src={image}
                             className="imageInput__label__img"
                             onError={() => setIsBroken(true)} />
                        <FontAwesomeIcon className="imageInput__closeIcon" icon={faCircleXmark}
                                         onClick={resetImageInput}/>
                    </>
                    : <FontAwesomeIcon className="imageInput__label__img" icon={faImage} size="8x"/>}
            </label>
            <input id="image" name="image" type="file" className="imageInput"
                   accept="image/jpg, image/jpeg, image/png, image/gif, image/bmp"
                   onChange={updateFileInput}
            />
        </>
    )
}
