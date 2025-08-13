import Map2 from "./maps/Map";

function Footer()
{
    return (
    <footer id="footer" className="footer col-lg-12">
        <div className="contacts col-lg-12">
            <ul className="contactList">
                <h4>I nostri contatti:</h4>
                <li><i className="fa-solid fa-location-dot"></i>Via Miramonti, 42, 50019 Sesto Fiorentino FI</li>
                <li><i className="fa-brands fa-whatsapp"></i>+39 3533983131</li>
                <li><i className="fa-solid fa-phone"></i> 055 614 8300</li>
                <li><i className="fa-solid fa-envelope"></i>Hotelmontemorello@gmail.com</li>
            </ul>
        </div>
        <div className="footer-copy">
            <p>© {new Date().getFullYear()} Adapassa — Tutti i diritti riservati.</p>
        </div>
    </footer>
    )
}

export default Footer