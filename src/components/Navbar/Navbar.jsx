import './Navbar.css';

const Navbar = ({ title = "PokeReact" }) => {

   return (
      <div className="navbar">
         <div className="nav-text">
            {title}
         </div>
      </div>
   );
};

export default Navbar;
