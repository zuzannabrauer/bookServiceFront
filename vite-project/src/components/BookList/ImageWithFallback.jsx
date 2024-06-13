import {useState} from "react";
import './ImageWithFallback.css'

export const ImageWithFallback = ({ src, className, fallback }) => {
    const [isBroken, setIsBroken] = useState(false)

    if (isBroken) return <img className={className} src={fallback} />

    return <img className={className} onError={() => setIsBroken(true)} src={src} />
}
