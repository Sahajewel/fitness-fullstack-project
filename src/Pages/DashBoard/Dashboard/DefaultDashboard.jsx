import { Helmet } from "react-helmet";
import defaultLottie from "../../../../src/assets/default.json"
import {  Player } from '@lottiefiles/react-lottie-player';
export default function DefaultDashboard() {
    return (
        <div>
             <Helmet>
            <title>Dashboard</title>
           </Helmet>
            <h1 className='text-white text-6xl font-bold text-center underline flex justify-center mb-20'>Dashboard</h1>
            <Player
                src={defaultLottie}
                className="player"
                loop
                autoplay
                style={{ height: '300px', width: '300px' }}
                
            />
           
        </div>
    )
}
