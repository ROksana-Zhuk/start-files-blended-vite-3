import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import CountryList from '../components/CountryList/CountryList'
import { useState, useEffect } from "react";
import { getCountries } from '../service/countryApi.js'
import Loader from '../components/Loader/Loader.jsx';

const Home = () => {


    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

        useEffect(() => {
            const getData = async () => {
                setIsLoading(true);
                setIsError(false);

                try {
                  const data = await getCountries();
                  setCountries(data);
                } catch (error) {
                   console.log(error);
                   setIsError(true);
                } finally {
                    setIsLoading(false);
                }
            }
            getData()
        }, []);



  return (

    <Section>
      {isError && <p><strong>Error! Try again.</strong></p>}

      <Container>


        <CountryList countries={countries}/>
      </Container>

      {isLoading && <Loader />}
    </Section>

  );
};
export default Home;
