import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';
import { useState } from "react";


const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({onSubmit }) => {

  const [region, setRegion] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(region)

    //onSubmit(event.target.region.value)
  };

  const handleChange = (event) => {
    setRegion(event.target.value)
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <button className={styles.button} type="submit">
            <FiSearch size="16px" />
        </button>
        <select onChange={handleChange}
                aria-label="select"
                className={styles.select}
                name="region"
                required
                defaultValue="default"
                >
            <option disabled value="default">
                Select a region
            </option>
           {regions.map(region =>
               <option key={region.id}
                       value={region.value}>
                    {region.name}
                </option>
           )}

        </select>
    </form>
  )
};

export default SearchForm;
