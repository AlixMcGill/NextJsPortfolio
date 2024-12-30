

export default function Button(
    {btnText, size, fontSize, color, href}: {btnText: string, size: string, fontSize: string, color: string, href: string}) {
    return (
        <a href={href}>
            <button className={`${color} ${size} button-base-styles`}>
                <span className={`${fontSize} open-sans-font-bold black-text`}>{btnText}</span>
            </button>
        </a>
    );
}