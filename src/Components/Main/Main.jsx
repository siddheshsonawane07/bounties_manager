import { HomeComponent } from "../Home/Home";
import Bounties from "./Bounty";


export const MainComponent = ()=>{

    return (
        <div className="main">
            {/* <HomeComponent></HomeComponent> */}
            {/* <Card></Card> */}
            <Bounties></Bounties>
        </div>
    );
}