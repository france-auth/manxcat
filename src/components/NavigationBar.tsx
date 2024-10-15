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
        className={`flex flex-col w-[65.4px] h-[80px] items-center justify-center ${ 
            isActive ? "bgradient border-[1px] border-[#EB8A90]" : ""}`}
        >
            {icon}
            <span className="mt-1 text-xs">{label}</span>
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
            height={'80px'}
            alignItems={'center'}
            justifyContent={'center'}
            position={'fixed'}
            bottom={0}
            right={0}
            zIndex={80}
           >
                <NavItem 
                    icon={
                        <Image src="/home.png"/>
                    }
                    label="HOME"
                    isActive={location.pathname === "/"}
                    to="/"
                />
                <NavItem 
                    icon={
                        <Image src="/task.png"/>
                    }
                    label="TASKS"
                    isActive={location.pathname === "/tasks"}
                    to="/tasks"
                />
                <NavItem 
                    icon={
                        <Image src="/shop.png"/>
                    }
                    label="SHOP"
                    isActive={location.pathname === "/shop"}
                    to="/shop"
                />
                <NavItem 
                    icon={
                        <Image src="/people.png"/>
                    }
                    label="FRIENDS"
                    isActive={location.pathname === "/friends"}
                    to="/friends"
                />
                <NavItem 
                    icon={
                        <Image src="/people.png"/>
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