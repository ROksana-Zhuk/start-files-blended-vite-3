import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchCountry } from '../service/countryApi.js';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import CountryInfo from '../components/CountryInfo/CountryInfo.jsx';
import Loader from '../components/Loader/Loader.jsx';

const Country = () => {

    const { countryId } = useParams();
    const [countryDetails, setCountryDetails] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);



    const location = useLocation();
    const goBackBtn = useRef(location.state ?? '/country');


    useEffect(() => {

        const fetchCountryDetails = async() => {
            setIsLoading(true);
            setIsError(false);
            try {
                const data = await fetchCountry(countryId)
                setCountryDetails(data);
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCountryDetails()

    }, [countryId]);


  return (
    <>
    <GoBackBtn to={goBackBtn.current}>Go back</GoBackBtn>

    <Section>
      {isError && <p><strong>Error! Try again.</strong></p>}
      <Container>
      {countryDetails && <CountryInfo info={countryDetails}/>}

      </Container>
      {isLoading && <Loader />}
    </Section>
    </>
  );
};

export default Country;
