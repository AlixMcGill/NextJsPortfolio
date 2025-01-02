export default function Button(
    {btnText, size, fontSize, color, href}: {btnText: string, size: string, fontSize: string, color: string, href: string}) {
    return (
        <a href={href}>
            <button className={`${color} ${size} button-base-styles margin-1rem`}>
                <span className={`${fontSize} open-sans-font-bold black-text`}>{btnText}</span>
            </button>
        </a>
    );
}

// btnText, size, fontSize, and color take css classes
// btnText is inner text of the button
// size is the size of the overall button
// fontSize is the font size... lol
// color is the bg color of the button

// href is where the button will take you

// if future alix needs to refer to fontSize and href comments please hydrate and take a break you've been staring at the screen too long