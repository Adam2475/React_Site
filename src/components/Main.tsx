import ingresso from "../assets/about_1.jpg";
import { Button } from "react-bootstrap";
 
function Main()
{
    return (
    <main className="content">
        <div className="row">
            <div className="col-lg-6 col-md-12 contentText">
                <div>
                    <h1>Hotel Montemorello</h1>
                    <p>Situato nel cuore del Parco Naturale di Monte Morello, il nostro hotel offre un’esperienza autentica tra paesaggi mozzafiato e il fascino della Toscana.
                        Con camere accoglienti, colazione inclusa e un’atmosfera familiare, è il punto di partenza perfetto per escursioni, 
                        gite in bicicletta o per scoprire le meraviglie di Firenze.
                    </p>
                </div>
                <div className="showButton">
                    <Button href="/history" variant="success">Scopri di più</Button>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 contentImg">
                <img src={ingresso} alt="ingresso" />
            </div>
        </div>
    </main>
    )
}

export default Main