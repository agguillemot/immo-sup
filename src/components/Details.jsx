import React from "react";
import { useSearchParams } from "react-router-dom";
import hoods from "../data/hoods.json";
import Ratings from "./Ratings";

const Details = () => {
    const [searchParams] = useSearchParams();
    const currentHoodId = searchParams.get('hood');
    const hood = hoods[currentHoodId];

    if (!hood) {
        return null;
    }

    return (
        <div>
            <h1>Quartier {hood.name}</h1>

            <h2>Description</h2>
            <p>{hood.description}</p>

            <h2>Transports</h2>
            <p>{hood.transports}</p>

            <h2>Commerces</h2>
            <p>{hood.shops}</p>

            <h2>Best places to be</h2>
            <p>{hood.hotspots}</p>

            <h2>Vie étudiante</h2>
            <Ratings value={hood.student_life} />

            <h2>Bars / restaurants</h2>
            <Ratings value={hood.bars} />

            <h2>Le + du quartier</h2>
            <p>{hood.bonus}</p>

            <h2>Prix moyens</h2>
            <ul>
                <li>Studio : {hood.prices.studio} €</li>
                <li>T2 : {hood.prices.t2} €</li>
                <li>T3 : {hood.prices.t3} €</li>
                <li>colocation : {hood.prices.shared} €</li>
            </ul>
        </div>
    )
}

export default Details;