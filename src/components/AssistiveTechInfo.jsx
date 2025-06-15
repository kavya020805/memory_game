export default function AssistiveTechInfo({ emojisData, matchedCards }) {
    const totalPairs = emojisData.length / 2
    const matchedPairs = matchedCards.length / 2
    const remainingPairs = totalPairs - matchedPairs
    
    return (
        <section 
            className="sr-only" 
            aria-live="polite"
            aria-atomic="true"
        >
            <h2>Game status</h2>
            <p>Number of matched pairs: {matchedPairs}.</p>
            <p>Number of cards left to match: {remainingPairs}.</p>
        </section>
    )
} 

