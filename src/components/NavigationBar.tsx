import React from "react";

import {
    Box,
    Image,
} from "@chakra-ui/react"
import "../index.css"
import { Link, useLocation } from "react-router-dom"

interface NavItemProps {
    icon: React.ReactNode;
    label: string; 
    isActive?: boolean;
    to: string; 
}

const NavItem: React.FC<NavItemProps> = ({
    icon, label, isActive = false, to
}) => (
    <Link to={to}>
        <Box
        className={`flex flex-col w-[65.4px] p-2 items-center justify-center ${ 
            isActive ? "bgradient border-[1px] border-[#EB8A90]" : ""}`}
        >
            {icon}
            <span className="mt-1 text-[9.5px] font-extrabold">{label}</span>
        </Box>
    </Link>
)


const NavigationBar: React.FC = () => {
    const location = useLocation();
    return(
        <nav>
            <Box
            bgColor={'#EFD0CA'}
            width={'100%'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            position={'fixed'}
            bottom={0}
            right={0}
            zIndex={40}
        >
                <NavItem 
                    icon={
                        <Image src="/home.png" className="w-6 h-auto"/>
                    }
                    label="HOME"
                    isActive={location.pathname === "/"}
                    to="/"
                />
                <NavItem 
                    icon={
                        <Image src="/task.png" className="w-6 h-auto"/>
                    }
                    label="TASKS"
                    isActive={location.pathname === "/tasks"}
                    to="/tasks"
                />
                <NavItem 
                    icon={
                        <Image src="/shop.png" className="w-6 h-auto"/>
                    }
                    label="SPIN"
                    isActive={location.pathname === "/spin"}
                    to="/spin"
                />
                <NavItem 
                    icon={
                        <Image src="/people.png" className="w-6 h-auto"/>
                    }
                    label="FRIENDS"
                    isActive={location.pathname === "/friends"}
                    to="/friends"
                />
                <NavItem 
                    icon={
                        <Image src="/people.png" className="w-6 h-auto"/>
                    }
                    label="WALLET"
                    isActive={location.pathname === "/wallet"}
                    to="/wallet"
                />
            </Box>
        </nav>
    )
}

export default NavigationBar