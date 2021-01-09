import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Logout = () => {
    const { logout } = useAuth0();

    return (
    <Link
        onClick={() => logout()}
    >
        Log out
    </Link>
    );
};

export default Logout;