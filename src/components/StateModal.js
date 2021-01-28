import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View
} from 'react-native';
import { useSelector } from 'react-redux';


const StateDetails = ({ currentState }) => {
    const [countiesData, setCountiesData] = useState([]);
    const [countiesPopulation, setCountiesPopulation] = useState(0);
    let stateDetails = currentState;

    useEffect(() => {
        fetch(stateDetails.detail)
            .then((res) => res.json())
            .then((res) => { setCountiesData(res.data) })
            .catch((err) => { console.error("there was an error getting county details ", err) })
    }, [currentState]);

    useEffect(() => {
        let newCountiesPopulation = countiesData.reduce((a, c) => {
            return a + c.population
        }, 0)
        setCountiesPopulation(newCountiesPopulation);
    }, [countiesData])
    if (!stateDetails) return <ActivityIndicator />
    return (
        <ScrollView nestedScrollEnabled={true} style={styles.innerContainer} contentContainerStyle={styles.container}>
            <View style={styles.scrollViewHeightController} >

                <Text style={styles.header}>{stateDetails.state}</Text>
                <Text>State total population: {stateDetails.population}</Text>
                <Text>{`There are: ${stateDetails.counties} counties in the\nstate of ${stateDetails.state}`}</Text>
                <Text>Accumulated county population is: {stateDetails.population}</Text>
                <Text>Which is {stateDetails.population === countiesPopulation ? <Text style={{ color: "green" }}>equal to the states record</Text> : <Text style={{ color: "red" }}>not equal to the current states record</Text>}</Text>
                <Text style={styles.counties}>The names of all the counties in the state are:</Text>
                <View style={styles.countyList}>
                    {countiesData.map((county) => {
                        return <Text key={county.county}>{county.county}</Text>
                    })}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        marginTop: "5%",
    },
    header: {
        fontSize: 20
    },
    countyList: {
        flexDirection: "column",
    },
});

export default StateDetails;
