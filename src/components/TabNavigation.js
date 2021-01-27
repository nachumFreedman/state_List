import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { Store } from '../store';
import * as wpActions from '../actions';
import { useSelector, useDispatch } from 'react-redux';

import StatesList from "./StatesList";
import StatesFiler from "./StatesFilter";
import StateModal from "./StateModal";

import { createMaterialBottomTabNavigator, createStackNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();


const States = ({ navigation }) => {
    const dispatch = useDispatch();
    const storeState = useSelector((state) => state.stateData);
    useState(() => {
        dispatch(wpActions.saveNavigation(navigation));

        fetch("http://pos.idtretailsolutions.com/countytest/states")
            .then((res) =>
                res.json()
            ).then((states) => {
                dispatch(wpActions.saveStates(states));
            }).catch((err) => {
                console.error("request to state api went wrong:", err);
            })

    }, [])



    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="List" component={StatesList} />
                <Tab.Screen name="Filter" component={StatesFiler} />
            </Tab.Navigator>
        </>
    );
};

const styles = StyleSheet.create({
});

export default States;
