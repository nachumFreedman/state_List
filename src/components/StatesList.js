import React, { useState } from 'react';
import {
    StyleSheet,
    FlatList,
    StatusBar,
    SafeAreaView
} from 'react-native';
import { useSelector } from 'react-redux';
import StateItem from "../modules/StateItem";


const StatesList = ({ searchableComponent, searchText }) => {
    //I added  the ternaries because of the bug, they weren't the fix but they will stop the app from crashing if there is a network failure
    const statesList = useSelector((store) => store.stateData && store.stateData.states ? store.stateData.states.data : []);
    const filteredStatesList = useSelector((store) => store.stateData && store.stateData.states ? store.stateData.states.data.filter(list => searchText ? list.state.includes(searchText) : true) : []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={searchableComponent ? filteredStatesList : statesList}
                renderItem={(item) => <StateItem eachState={item}></StateItem>}
                keyExtractor={item => item.population + ""}
            />
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});

export default StatesList;
