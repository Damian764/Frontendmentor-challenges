import './scss/_text-hover-effect.scss'

type TextHoverEffectProps = {
    text: string
}

const TextHoverEffect = ({ text }: TextHoverEffectProps) => {
    return (
        <>
            {text.split('').map((letter, idx) => <span key={idx} className="animated-text">{letter === " " ? "\u00A0" : letter}</span>)}
        </>
    )
}

export default TextHoverEffect