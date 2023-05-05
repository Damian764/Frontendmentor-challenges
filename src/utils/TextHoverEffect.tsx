import './scss/_text-hover-effect.scss'

const TextHoverEffect = ({ text }: { text: string }) => {
    return (
        <>
            {text.split('').map((letter, idx) => <span key={idx} className="animated-text">{letter === " " ? "\u00A0" : letter}</span>)}
        </>
    )
}

export default TextHoverEffect