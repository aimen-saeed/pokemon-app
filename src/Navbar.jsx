import './Navbar.css';
import { useState, useEffect } from 'react';

const Navbar = ({ title ="PokeReact"}) => {
   const [text, setText] = useState();

   useEffect(() => {
      setText(title);
   }, [title]);

   return (
      <div className="navbar">
         <div className="nav-text">
            {text}
         </div>
      </div>
   );
};

export default Navbar;
