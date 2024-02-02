import { NavLink , useLocation } from "react-router-dom";

export default function Header(){
     const { pathname } = useLocation();
     console.log(pathname)
    return (
        <div className="">
            <NavLink 
                to={
                    pathname.includes('/home') ? '/home' : '/'
                }
                className={({isActive})=> isActive ? 'active' : undefined}
                end   
            > Home </NavLink>
            <NavLink 
                to='/about'
                className={({isActive})=> isActive ? 'active' : undefined}
            >About </NavLink>
        </div>
    )
}