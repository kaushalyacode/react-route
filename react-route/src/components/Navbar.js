import { Link,NavLink } from "react-router-dom";

export const Navbar =() =>{
     return (
     <nav>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/about'>About</NavLink>
         {/*with nave link active class come and u can add styles to active class at css */}
     </nav>)

}