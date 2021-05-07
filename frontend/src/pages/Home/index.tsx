import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Sales-Dashboard</h1>
                    <p className="lead">Analyse of performance by sales</p>
                    <hr />
                    <p>This application consists in showing a dashboard from data supplied by a backend built with Java and Spring Boot.</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        See Dashboard
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
