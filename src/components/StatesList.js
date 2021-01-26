import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList,
    TouchableOpacity,
    StatusBar,
    SafeAreaView
} from 'react-native';
import { Store } from '../store';
import * as wpActions from '../actions';
import { useSelector, useDispatch } from 'react-redux';


const StateItem = (eachState) => {
    return (
        <TouchableOpacity style={styles.stateItemContainer}>
            <Text
                style={styles.eachState}
            >
                {eachState.item.state}
            </Text>
        </TouchableOpacity>
    )
};


const StatesList = ({ searchableComponent, searchText }) => {
    const dispatch = useDispatch();
    const statesList = useSelector((state) => state.stateData.states.data);
    const filteredStatesList = useSelector((state) => state.stateData.states.data.filter(list => searchText ? list.state.includes(searchText) : true));

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                numColumns={2}
                data={searchableComponent ? filteredStatesList : statesList}
                renderItem={StateItem}
                keyExtractor={item => item.population + ""}
            />
        </SafeAreaView>

    );
};
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    eachState: {
        textAlign: "center",
        fontSize: 30,
        margin: 5
    },
    stateItemContainer: {
        width: "50%"
    }
});

export default StatesList;
