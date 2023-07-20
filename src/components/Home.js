import React from 'react'
import {Routes, Route, useNavigate, Link} from 'react-router-dom'
import { restaurants } from '../data/data'

const Home = () => {
    const navigate = useNavigate()
    const pizzaTime = () => {
        navigate('/pizza')
    }
    return (
        <div className="home">
            <div className='motto-container pizza'>
                <h2 className='motto'>Your favorite food, delivered while coding</h2>
                <p className='suggestion suggestion-btn' onClick={() => pizzaTime()}><span>Pizza?</span></p>
            </div>
            <div className='selections'>
                <p className='location'>Food Delivery in Gotham City</p>
                {restaurants.map((place, idx) =>
                    <div key={idx} className='choices'>
                        <img className='restaurant' src={place.Image} />
                        <p className='place'>{place.Name}</p>
                        <p className='pick'>{place.Price} • {place.Genre} • {place.Type} • {place.Selection}</p>
                        <p className='info'>{place.Wait} {place.Fee} Delivery Fee</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home