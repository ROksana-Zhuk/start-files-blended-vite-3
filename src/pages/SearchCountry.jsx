import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import SearchForm from '../components/SearchForm/SearchForm'
import CountryList from '../components/CountryList/CountryList'
import { fetchByRegion } from '../service/countryApi.js'
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader.jsx';


const SearchCountry = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const [countries, setCountries] = useState([]);


    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        const region = searchParams.get('region')

        // if (region === null) {
        //     return
        //}

        if (region !== null) {

            const getData = async () => {
                setIsLoading(true);
                setIsError(false);
                try {
                    const data = await fetchByRegion(region)
                    setCountries(data);
                } catch (error) {
                    console.log(error);
                    setIsError(true);
                } finally {
                    setIsLoading(false);
                }
            }
            getData()
        }
    }, [searchParams]);

    const onSubmit =(region) => {
        setSearchParams({ region });
    }

  return (
    <Section>
      {isError && <p><strong>Error! Try again.</strong></p>}
      <Container>
        <SearchForm onSubmit={ onSubmit }/>
        <CountryList countries={countries}/>
      </Container>
      {isLoading && <Loader />}
    </Section>
  );
};

export default SearchCountry;
