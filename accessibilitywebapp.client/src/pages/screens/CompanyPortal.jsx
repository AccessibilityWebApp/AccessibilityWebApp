import "@/pages/pages_css/CompanyPortal.css";
import NavbarComponent from "./components/NavbarComponent";

export const BedrijfsPortaal = () => {
    return (
        <div className="bedrijfs-portaal">
            <NavbarComponent />
            <div className="div">
                <img className="rectangle" alt="Rectangle" src="rectangle-50.svg" />
                <div className="frame">
                    <div className="overlap">
                        <img className="vector" alt="Vector" src="vector-20.svg" />
                        <div className="text-wrapper">Onderzoek app ING</div>
                    </div>
                    <div className="overlap-group">
                        <img className="img" alt="Vector" src="vector-15.svg" />
                        <img className="vector-2" alt="Vector" src="vector-17.svg" />
                    </div>
                    <div className="text-wrapper-2">Uw onderzoeken:</div>
                    <div className="overlap-group-2">
                        <div className="text-wrapper-3">Onderzoek website ING</div>
                        <img className="vector-3" alt="Vector" src="vector-18.svg" />
                    </div>
                    <div className="overlap-2">
                        <img className="vector-4" alt="Vector" src="vector-19.svg" />
                        <div className="text-wrapper-4">Onderzoek app ING</div>
                    </div>
                    <div className="overlap-3">
                        <div className="text-wrapper-4">Onderzoek app ING</div>
                        <img className="vector-5" alt="Vector" src="vector-21.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BedrijfsPortaal;

