import "../node_modules/bulma/css/bulma.css";
import "./App.css";
import ProfileCards from "./ProfileCards";
import Alien from "./images/alien.png";
import GentleMan from "./images/gentleman.png";
import Mummy from "./images/mummy.png";

function App() {
  return (
    <div className="m123Body">
      <div className="Navbar123">Picture/Tile Cards</div>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCards
                image={Alien}
                name="Alien"
                age="20"
                address="Alien Society"
                contact="0000"
                description="exo specie, dangerous, origin unknown"
              />
            </div>
            <div className="column is-4">
              <ProfileCards
                image={GentleMan}
                name="GentleMan"
                age="20"
                address="CapeTown"
                contact="0000"
                description="HitMan, DeadShot, Origin CapeTown"
              />
            </div>
            <div className="column is-4">
              <ProfileCards
                image={Mummy}
                name="Mummy"
                age="20"
                address="Egypt"
                contact="0000"
                description="Dead, skeleton, Origin Pyramid"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
