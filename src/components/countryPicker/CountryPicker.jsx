import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api/index";

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchCountries(await fetchCountries());
        };
        fetchAPI();
    }, [setFetchCountries]);
    console.log(fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect
                defaultValue=""
                onChange={e => {
                    console.log(e.target.value);
                    handleCountryChange(e.target.value);
                }}
            >
                <option key={1} value="global">
                    Global
                </option>
                {fetchedCountries.map((country, i) => (
                    <option key={i} value={country}>
                        {country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;
