import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';


const StateModal = () => {
    const [countiesData, setCountiesData] = useState([]);
    const [countiesPopulation, setCountiesPopulation] = useState(0);
    let storeState = useSelector((state) => state.stateData)
    console.log(storeState.currentModalState.item)
    let stateDetails = storeState.currentModalState.item;

    useEffect(() => {
        fetch(stateDetails.detail)
            .then((res) => res.json())
            .then((res) => { setCountiesData(res.data) })
            .catch((err) => { console.error("there was an error getting county details ", err) })
    }, []);

    useEffect(() => {
        let newCountiesPopulation = countiesData.reduce((a, c) => {
            return a + c.population
        }, 0)
        setCountiesPopulation(newCountiesPopulation);
    }, [countiesData])

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <Text>{stateDetails.state}</Text>
                <Text>State total population: {stateDetails.population}</Text>
                <Text>{`There are: ${stateDetails.counties} counties in the state of ${stateDetails.state}`}</Text>
                <Text style={styles.counties}>The names of all the counties in the state are: {countiesData.map((county) => county.county)}</Text>
                <Text>Accumulated county population: {stateDetails.population}</Text>
                <Text>Which is {stateDetails.population === countiesPopulation ? "equal to the states record" : "not equal to the current states record"}</Text>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    counties: {
        textAlign: "center"
    }
});

export default StateModal;
