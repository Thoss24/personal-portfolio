import MainNavigation from "../MainNavigation";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
        <MainNavigation />
        <nav>
            <Outlet />
        </nav>
        </>
    )
};

export default Root