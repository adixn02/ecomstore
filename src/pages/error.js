import { useRouteError } from "react-router-dom";
const Error = () => {
    const { error } = useRouteError();
    console.log(error);
    return (
        <div>
        <h1>404 - Page Not Found</h1>
        </div>
    );
}

export default Error;