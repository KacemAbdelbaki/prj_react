import logo from "../assessts/logo.png"

const Nav=()=>{
    return(
        <div class="divNav">
            <div>
                <img class="logo" src={logo} alt=""/>
            </div>
            <div class="diva">
                <a class="aNav" href="">Home</a>
                <a class="aNav" href="">Livre</a>
                <a class="aNav" href="">Contact</a>
            </div>
        </div>
    )
}
export default Nav;