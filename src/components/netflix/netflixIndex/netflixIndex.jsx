// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NetflixHeader } from "../netflixHeader/netflixHeader";
import './netflixIndex.css';
import { NetflixMain } from "../netflixMain/netflixMain";


export function NetflixIndex(){
    return(
        <div className="bg-image">
           <div className="bg-shade">
          <NetflixHeader />
          <NetflixMain />
           </div>
        </div>
    )
}