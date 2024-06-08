import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faImage} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import './ImageInput.css'

export const ImageInput = ({ onChange }) => {
    const [ fileInputIcon, setFileInputIcon ] = useState()

    const updateFileInput = e => {
        console.log(e.target.files[[0]])
        onChange(e.target.files[0])
        const r = new FileReader()
        r.readAsDataURL(e.target.files[0])
        r.onloadend = ev => setFileInputIcon(ev.target.result.toString())
    }

    const resetImageInput = event => {
        event.preventDefault()
        setFileInputIcon(undefined)
    }

    return (
        <>
            <label htmlFor="image" className="imageInput__label">
                {fileInputIcon ?
                    <>
                        <img src={fileInputIcon} className="imageInput__label__img"/>
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
