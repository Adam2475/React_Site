import Map2 from "./maps/Map";

function Footer()
{
    return (
    <footer className="footer col-lg-12">
        {/* adding row div to make bootstrap work */}
        <div className="row">
            <div className="links col-md-12 col-lg-6">
                <ul className="linkList">
                    <li>Storia dell'azienda</li>
                    <li>Chi siamo</li>
                    <li>Contattaci</li>
                    <li>Servizi</li>
                    <li>Politica sulla privacy</li>
                </ul>
            </div>
            <div className="contacts col-md-12 col-lg-6">
                <ul className="contactList ">
                    <li><i className="fa-solid fa-location-dot"></i>Via Miramonti, 42, 50019 Sesto Fiorentino FI</li>
                    <li><i className="fa-solid fa-phone"></i> 055 614 8300</li>
                    <li><i className="fa-solid fa-envelope"></i>Hotelmontemorello@gmail.com</li>
                </ul>
            </div>
        </div>
    </footer>
    )
}

export default Footer