export default function DividerLines(
    {classname, lineOneLength, lineTwoLength, lineThreeLength, flexClass}:
     {classname: string, lineOneLength: string, lineTwoLength: string, lineThreeLength: string, flexClass: string}) {
    return (
        <div className={`${classname} ${flexClass}`}>
            <div className={`black-bg divider-base ${lineOneLength}`}></div>
            <div className={`black-bg divider-base ${lineTwoLength}`}></div>
            <div className={`black-bg divider-base ${lineThreeLength}`}></div>
        </div>
    );
}