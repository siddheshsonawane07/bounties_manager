import { CardComponent } from "../Card/Card";
import { NavComponent } from "../Navbar/Navbar";

export const HomeComponent = () => {
  return (
    <div className="main">
      <NavComponent></NavComponent>
      <CardComponent
        _desc={
          "This is a longer card with supporting text below as a natural lead"
        }
        _title={"A Bounty card"}
        _reward={"$500"}
        _deadline={"13 days remaining"}
      ></CardComponent>
    </div>
  );
};
