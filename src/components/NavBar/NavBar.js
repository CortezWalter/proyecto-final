import '../NavBar/NavBar.css';
import logo from '../NavBar/sctopfooter.png';
import CartWidget from '../CartWidget';

function NavBar () {
    return (
        <nav className="nav-extended">
            <div className="nav-wrapper">
                <img className="Logo" src={logo} alt="Sana Costumbre"/>
                <div className="icono">
                    <CartWidget  />
                </div>
            </div>
            <div className="nav-content">
                <ul className="tabs tabs-transparent">
                    <li className="tab"><a href="#test1">Panes</a></li>
                    <li className="tab"><a className="active" href="#test2">Budines</a></li>
                    <li className="tab disabled"><a href="#test3">Tartas</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;

