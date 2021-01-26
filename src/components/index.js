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

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

const States = () => {
    const dispatch = useDispatch();
    const storeState = useSelector((state) => state.stateData);
    useState(() => {
        fetch("http://pos.idtretailsolutions.com/countytest/states")
            .then((res) =>
                res.json()
            ).then((states) => {
                dispatch(wpActions.saveStates(states));
                dispatch(wpActions.changeComponent("list"));
            }).catch(() => {
                console.error("request to state api went wrong:", err);
            })

    }, [])
    // console.log(Store.getState().appData.states)

    return (
        <Tab.Navigator>
            <Tab.Screen name="List" component={StatesList} />
            <Tab.Screen name="Filter" component={StatesFiler} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
});

export default States;
