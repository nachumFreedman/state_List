import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import * as wpActions from '../actions';
import { useDispatch } from 'react-redux';

import StatesList from "./StatesList";
import StatesFiler from "./StatesFilter";

import { createMaterialBottomTabNavigator, createStackNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

//TODO takeout tabs and only use 'stack'
const States = ({ navigation }) => {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setReady(true);
        })
    }, []);

    const dispatch = useDispatch();

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


    if (!ready) return <></>
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
