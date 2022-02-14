import { Link } from 'react-router-dom';


export default function CountriesList(props) {
  
  return (
    <div>

        {props.countries.map((country) => (
          <Link
            to={`/${country.alpha3Code}`}
            key={country.alpha3Code}
          >
            {country.name.common}
          </Link>
        ))}
      
    </div>
  );
}