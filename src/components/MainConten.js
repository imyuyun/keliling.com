import React from "react";
import HomePage from "./HomePage";
import CardDestination from "./CardDestination";
import Bali from "./../Assets/bali.jpg";
import Bromo from "./../Assets/bromo.jpg";
import Raja4 from "./../Assets/raja4.jpg"
import Derawan from "./../Assets/derawan.jpg";
import Komodo from "./../Assets/komodo.jpg";
import Lombok from "./../Assets/lombok.jpg";



// finction maincontent
const MainConten = ()=> {
    return (
        <div> 
            <HomePage /> 
            <div className="container">
                <div className="container">
                    <div className="col-12 text-center my-5">
                        <h1> DESTINATION</h1>
                    </div>
                    
                    <div className="row justify-content-center my-5">
                        <div className="col-lg-4">
                            <CardDestination image={Bali} wisata="Bali" button="Visit Bali"/>
                        </div>
                        <div className="col-lg-4">
                            <CardDestination image={Bromo} wisata="Bromo" button="Visit Bromo"/>
                        </div>
                        <div className="col-lg-4">
                            <CardDestination image={Raja4} wisata="Raja Ampat" button="Visit Raja Ampat"/>
                        </div>    
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <CardDestination image={Derawan} wisata="Derawan" button="Visit Derawan"/>
                        </div>
                        <div className="col-lg-4">
                            <CardDestination image={Komodo} wisata="Komodo" button="Visit Komodo"/>
                        </div>
                        <div className="col-lg-4">
                            <CardDestination image={Lombok} wisata="Lombok" button="Visit Lombok"/>
                        </div>    
                    </div>
            </div>
        </div>

        </div>
    )

}

export default MainConten;