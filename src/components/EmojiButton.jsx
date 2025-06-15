import { decodeEntity } from 'html-entities'

export default function EmojiButton({   
        emoji,
        handleClick,  
        selectedCardEntry, 
        matchedCardEntry,
        index
    }) {
    const btnContent = selectedCardEntry || matchedCardEntry ? decodeEntity(emoji.htmlCode[0]) : "?"

    const btnStyle = matchedCardEntry ? "btn--emoji__back--matched" : selectedCardEntry ? "btn--emoji__back--selected" : "btn--emoji__front"
    
    const btnAria = matchedCardEntry 
        ? `${decodeEntity(emoji.htmlCode[0])}. Matched.` 
        : selectedCardEntry 
            ? `${decodeEntity(emoji.htmlCode[0])}. Not matched yet.` 
            : "Card upside down."

    const position = index + 1
    
    return (
        <button 
            className={`btn btn--emoji ${btnStyle}`}
            onClick={selectedCardEntry ? null : handleClick}
            disabled={matchedCardEntry}
            aria-label={`Position ${position}: ${btnAria}`}
            aria-live="polite"
        >
            {btnContent}
        </button>
    )
}
 