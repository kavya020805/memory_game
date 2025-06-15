import RegularButton from './RegularButton'
import { useRef, useEffect } from 'react'

export default function GameOver({ handleClick }) { 

    const DivRef = useRef(null)

    useEffect(() => {
        DivRef.current.focus()
    }, [])

    return (
        <div className="wrapper wrapper--accent" ref={DivRef} tabIndex={-1}>
            <p className="p--large">You've matched all the memory cards!</p>
            <RegularButton handleClick={handleClick}>
                Play again
            </RegularButton>
        </div>
    )
}
