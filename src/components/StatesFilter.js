import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Store } from '../store';
import * as wpActions from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import StatesList from "./StatesList";
import StatesSearchList from "../modules/Filter";
import Filter from "../modules/Filter";

const StatesFiler = () => {
    const [searchText, setSearchText] = useState("");
    // console.log(Store.getState().appData.states)

    return (
        <>
            <Filter searchText={(text) => { setSearchText(text) }} />
            <StatesList searchableComponent={true} searchText={searchText} />
        </>
    );
};

const styles = StyleSheet.create({
});

export default StatesFiler;
