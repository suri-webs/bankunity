import "../style/AboutUs.css";

export default function Aboutus() {
    return (
        <div className="aboutus-container">
            <div className="aboutus-content">
                <h2>About Us</h2>
                <p className="tagline">Empowering Students for a Brighter Future</p>
                <div className="aboutus-card">
                    <p>
                        The IGNOU Student Division is dedicated to providing quality education and support to students across the globe. 
                        Our mission is to make learning accessible, flexible, and student-centric.
                    </p>
                    <ul>
                        <li>📚 Over 4 million students enrolled</li>
                        <li>🌍 Serving students in 50+ countries</li>
                        <li>🎓 200+ programs to choose from</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}