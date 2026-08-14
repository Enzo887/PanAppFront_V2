import { NavbarMain } from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
export function MainLayout(){
    return(
        <>
            <NavbarMain/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}