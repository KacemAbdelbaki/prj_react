import logo from "../assessts/logo"

const Nav=()=>{
    return(
        <div class="divNav">
            <img class="logo" src={logo} alt=""/>
            <div class="diva">
                <a class="aNav" href="">Home</a>
                <a class="aNav" href="">Livre</a>
                <a class="aNav" href="">Contact</a>
            </div>
            <div class="divButton">
                <button class="Button">Sign up</button>
                <button class="Button">Login</button>
            </div>
        </div>
    )
}
export default Nav;