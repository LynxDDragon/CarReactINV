import Car from '../components/Car';
import CarInformation from '../components/CarInformation';
import { useState } from 'react';

function Cars() {
  const [cars, setCars] = useState([
    {
        "id": 1,
        "make": "Toyota",
        "information": {
            "model": "Supra",
            "color": "White",
            "year": 2001
        }
    },
    {
        "id": 2,
        "make": "Nissan",
        "information": {
            "model": "Skyline",
            "color": "Silver",
            "year": 2005
        }
    },
    {
        "id": 3,
        "make": "Mazda",
        "information": {
            "model": "Miata",
            "color": "Red",
            "year": 1997
        }
    },
    {
        "id": 4,

        "make": "Honda",
        "information": {
            "model": "240SX",
            "color": "White",
            "year": 2021
        }
    }
  ])

  const [carInformation, setCarInformation] = useState(cars[0])


  return (
    <div className="App">
      <header className="App-header">
        <h2>Choose your vehicle!</h2>
        <CarInformation car={carInformation} />
        <hr />
        { cars.map((car) => <Car clickHandler={setCarInformation} key={car.id} car={car} />) }
      </header>
    </div>
  );
}

export default Cars;