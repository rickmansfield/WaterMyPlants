import React from 'react'
import styled from 'styled-components'

export default function Plant({ details }) {
    if (!details) {
        return <h3>Working fetching your plant&apos;s details...</h3>
    }

    return (
        <Plantcard>
            <div className='plant container'>
                <h2>{details.nickname}</h2>
                <p>species: {details.size}</p>
                <p>h2oInterval: {details.special}</p>
                <p>imgae: {details.image}</p>
            </div>
        </Plantcard>
    )
}

const Plantcard = styled.div`
.plant {
  background-color: #fff;
  border: 0;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  cursor: pointer;
  position: relative;
  margin: 1rem auto;
}
@media (max-width: 800px) {
	.plant {
	  background: rgb(189, 189, 146);
	  background-color: #E0E1E3;
	}
`;
