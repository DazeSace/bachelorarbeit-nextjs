import Link from "next/link";

const BasicButtonMidnight = (props) => {
    return (
        <Link href={props.link} passHref={false}>
            <div
                className={'button-midnight mt-10'}>
                <p>{props.text}</p>
            </div>
        </Link>
    )
}
export default BasicButtonMidnight

