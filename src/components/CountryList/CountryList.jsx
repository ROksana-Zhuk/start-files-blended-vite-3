import GridItem from '../GridItem/GridItem'
import Grid from '../Grid/Grid'
import { Link, useLocation } from 'react-router-dom';




const CountryList = ({ countries }) => {

  console.log("countries", countries);

  const location = useLocation();


  return  (
    <Grid>
      {countries.map((country) => (
        <GridItem key={country.id}>
          <Link to={`/country/${country.id}`} state={location}>
            <img src={country.flag} alt={country.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  )
};
export default CountryList;
