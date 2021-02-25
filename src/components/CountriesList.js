
import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countriesList } = props;

  return ( 
    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
      <div className="list-group">
        {countriesList.map(eachCountry => {
          
          return (
            <Link to={`/${eachCountry.cca3}`} key={eachCountry.cca3} className="list-group-item list-group-item-action">        
              <span role='img'>{eachCountry.flag}</span> 
              {eachCountry.name.common}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CountriesList;