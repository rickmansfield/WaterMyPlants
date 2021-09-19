import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../axiosWithAuth'
import styled from 'styled-components'
import { useHistory } from 'react-router';
export default function PlantList() {
    const [plants, setPlants] = useState([]);
    const history = useHistory()

    useEffect(() => {
        axiosWithAuth().get('/api/plants')
            .then(res => {
                console.log(res)
                setPlants(res.data);
                console.log('plants: ', plants);
            })
            .catch(err => {
                console.log(err)
            })
            /*eslint-disable-next-line */
    }, []);


    const deletePlant = (id) => {
        setPlants(plants.filter((plant) => plant.id !== id));
      };


      const deleteItem = (plant) => {
        axiosWithAuth()
          .delete(`/api/plants/${plant.plantID}`)
          .then((res) => {
            // console.log(res);
            deletePlant(plant.plantID);
            axiosWithAuth().get('/api/plants')
            .then(res => {
                // console.log(res)
                setPlants(res.data);
                // console.log('plants: ', plants);
            })
            .catch(err => {
                console.log(err)
            })
          })
          .catch((err) => console.log(err));
      };  

      const editPlant = (plant) => {
        axiosWithAuth()
        .delete(`/api/plants/${plant.plantID}`)
        .then((res) => {
          // console.log(res);
          deletePlant(plant.plantID);
          history.push('/addPlant')
        })
        .catch((err) => console.log(err));
      }

    return (
        <Plantlist>
            <main className='plant-list'>
                {plants.map((plant) => (
                    <div className='plant-card' key={plant.plantID}>
                        <div className='plant-details'>
                            <h2>{plant.nickname}</h2>
                            <p>Amount of Water Needed: {plant.h2oAmount}</p>
                            <p>How often I need watered: {plant.h2oInterval}</p>
                            <button onClick={() => editPlant(plant)} >Edit</button> <button onClick={() => deleteItem(plant)}>Delete</button>
                        </div>
                    </div>
                ))}
            </main>
        </Plantlist>
    )
}



const Plantlist = styled.div`
.plant-card {
  background-color: #fff;
  border: 0;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  cursor: pointer;
  position: relative;
  margin: 1rem auto;
}
`;