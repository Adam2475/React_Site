import NavigationList from './lists/navigationList'
import CarouselTop from './carousels/carousel'

function Header()
{
    return (
    <header className="header">
        <NavigationList/>
        <CarouselTop/>
    </header>)
}

export default Header