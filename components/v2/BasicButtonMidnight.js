import Link from "next/link";

const BasicButtonMidnight = (props) => {
    return (
        <Link href={props?.link} passHref={false}>
            <div
                onClick={props?.onClick}
                className={`button-midnight ${props?.className}`}>
                <p>{props.text}</p>
            </div>
        </Link>
    )
}
export default BasicButtonMidnight

