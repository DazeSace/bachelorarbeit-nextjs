import Link from "next/link";

const BasicButtonCarib = (props) => {
    return (
        <Link href={props?.link} passHref={true}>
            <div
                onClick={props?.onClick}
                className={`button-carib ${props?.className}`}>
                <p>{props.text}</p>
            </div>
        </Link>
    )
}
export default BasicButtonCarib

