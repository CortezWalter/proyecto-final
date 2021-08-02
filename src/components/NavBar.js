function NavBar () {
    return (
        <div>
            <nav class="nav-extended">
                <div class="nav-wrapper">
                <a href="#" class="brand-logo"><img src="../public/sctopfooter.png" alt="Sana Costumbre"/></a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">Menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html"><i class="fas fa-shopping-cart"></i></a></li>
                </ul>
                </div>
                <div class="nav-content">
                <ul class="tabs tabs-transparent">
                    <li class="tab"><a href="#test1">Panes</a></li>
                    <li class="tab"><a class="active" href="#test2">Budines</a></li>
                    <li class="tab disabled"><a href="#test3">Tartas</a></li>
                </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">Panes</a></li>
                <li><a href="badges.html">Budines</a></li>
                <li><a href="collapsible.html">Tartas</a></li>
            </ul>
        </div>
    )
}

export default NavBar;

