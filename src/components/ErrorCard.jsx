import RegularButton from "./RegularButton";
import { useEffect, useRef} from "react";

export default function ErrorCard({ handleClick }) {

    const divRef = useRef(null)

    useEffect(() => {
        divRef.current.focus()
    }, [])

    return (
        <div className="wrapper wrapper--accent" ref={divRef}>
            <p className="p--large">Sorry, there was an error loading the game.</p>
            <p className="p--regular">Please come back later or click the button below to try restarting the game.</p>
            <RegularButton handleClick={handleClick}>
                Restart Game
            </RegularButton>
        </div>
    )
}   