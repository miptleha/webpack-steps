import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <h2>Not found</h2>
            <p>Page not found.</p>
            <p>Go <Link to="/">home</Link>.</p>
        </>
    )
}