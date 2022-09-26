import logo from '../assests/logo.png';
function Header(){
    return(<header className="header">
        <nav>
            <div className="logo"><img src={logo}/></div>
            <div className="components">
                <p>Home</p>
                <p>About Us</p>
                <p>Our Services</p>
                <p>Products</p>
            </div>
        </nav>
    </header>)
}
export default Header;
