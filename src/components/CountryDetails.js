import React from 'react';
import { Link } from 'react-router-dom';

// class countyDetails extends Component {
//     render() {

let CountryDetail = (props) => {
  
  let { countriesList } = props;

  
  let country = countriesList.find(country => country.cca3);

  return (
    <div>
      <h1>{country.name && country.name.common}</h1>
      <ul>
          <li>
            <li>Capital city:</li>
            <li>{country.capital && country.capital}</li>
          </li>
          <li>
            <li>country Area:</li>
            <li>{country.area}
              <sup>2</sup>
            </li>
          </li>
          <li>
            <li>Border countries:</li>
            <li>
      <ul>
                {country.borders && 
   country.borders.map(borderCode => {
                 
  let borderCountry = countriesList.find(country => country.cca3 === borderCode)
 return (
     <li key={borderCode}>
       <Link to={`/${borderCode}`}>     {borderCountry.name}
                      </Link>
                    </li>)
                })}
              </ul>
            </li>
          </li>
      </ul>
    </div>
  )
}

export default CountryDetail;