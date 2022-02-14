import { useParams } from 'react-router-dom';

function CountryDetails(props) {
    const params = useParams()
    const DetailedCountry = props.countries.find((country) => country.alpha3Code === params.alpha3Code);

    return (
        <div>
            <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${DetailedCountry.alpha2Code.toLowerCase()}.png`}
            alt="flag" />
            <h1>{DetailedCountry.name.common}</h1>
        </div>
    )

}


export default CountryDetails;
