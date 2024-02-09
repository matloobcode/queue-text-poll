import { NetflixRegister } from '../netflixRegister/netflixRegister';
import './netflixMain.css';

export function NetflixMain(){
    return(
        <div className="main-text">
            <h2>Unlimited movies, TV shows and more</h2>
            <p>Watch anywhere. Cancel anytime.</p>
            <NetflixRegister />
        </div>
    )
}