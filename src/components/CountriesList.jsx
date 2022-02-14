import { Link } from 'react-router-dom';


export default function CountriesList(props) {
  
  return (
    <div>

        {props.countries.map((country) => (
          <Link
            to={`/${country.alpha3code}`}
            key={country.alpha3code}
          >
            {country.name.common}
          </Link>
        ))}
      
    </div>
  );
}