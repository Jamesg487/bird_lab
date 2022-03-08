import { useState, useEffect } from "react";
import Modal from 'react-modal';

import './App.css';

import SightingsForm from "./SightingsForm";
import SightingsGrid from "./SightingsGrid";
import { getSightings } from "./SightingService";

function App() {

  const [birdSightings, setBirdSightings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(()=>{
    getSightings().then((allSightings)=>{
      setBirdSightings(allSightings);
    })
  }, []);

  const addSighting = (sighting) =>{
    const temp = birdSightings.map(s =>s);
    temp.push(sighting);
    setBirdSightings(temp);
  }

  const removeSighting = (id) => {
    const temp = birdSightings.map(s =>s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setBirdSightings(temp);
  }

  const handleButtonClick = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <Modal
          isOpen={isModalOpen}
          ariaHideApp={false}
          contentLabel="Update"
      >
          <div className="formWrap">
              <label htmlFor="species">Species:</label>
              <input type="text" id="species"  />
          </div>
          <div className="formWrap">
              <label htmlFor="location">Location:</label>
              <input type="text" id="location"  />
          </div>
          <div className="formWrap">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date"  />
          </div>
          <button onClick={handleButtonClick}>OK</button>
      </Modal>
      <SightingsForm addSighting={addSighting}/>
      <SightingsGrid sightings={birdSightings} removeSighting={removeSighting} />
    </>
  );
}

export default App;
