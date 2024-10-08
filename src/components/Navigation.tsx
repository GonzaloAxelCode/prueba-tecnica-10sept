import { Navbar, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";

import { Link } from "@nextui-org/link";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const menuItems = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/view1",
        name: "View1"
    },
    {
        path: "/view2",
        name: "View2"
    }
];


const Navigation = () => {
    const location = useLocation()
    const path = location.pathname
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <Navbar className="sm:hidden absolute" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />

            </NavbarContent>



            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                item.path === path ? "primary" : "foreground"
                            }
                            className="w-full"
                            href={item.path}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default Navigation