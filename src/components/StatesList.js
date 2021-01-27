import React, { useState } from 'react';
import {
    StyleSheet,
    Dimensions,
    FlatList,
    StatusBar,
    SafeAreaView
} from 'react-native';
import { useSelector } from 'react-redux';
import StateItem from "../modules/StateItem";


const StatesList = ({ searchableComponent, searchText }) => {
    const statesList = useSelector((state) => state.stateData.states.data);
    const filteredStatesList = useSelector((state) => state.stateData.states.data.filter(list => searchText ? list.state.includes(searchText) : true));

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                numColumns={2}
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
