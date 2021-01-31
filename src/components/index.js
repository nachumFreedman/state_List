import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import * as wpActions from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import StatesList from "./StatesList";
import StatesFiler from "./StatesFilter";
import Filter from "../modules/Filter";
import StateDetails from "./StateDetails";

//TODO takeout tabs and only use 'stack'
const States = () => {
    const [searchText, setSearchText] = useState("");
    const [ready, setReady] = useState(false);
    const modal = useSelector((store) => store.stateData.currentModalState ? store.stateData.currentModalState.item : false);

    const runSetReady = () => {
        setTimeout(() => {
            setReady(true);
        })
    }

    const dispatch = useDispatch();

    useState(() => {

        setTimeout(() => {
            fetch("http://pos.idtretailsolutions.com/countytest/states")
                .then((res) =>
                    res.json()
                ).then((states) => {
                    dispatch(wpActions.saveStates(states));
                    runSetReady();
                }).catch((err) => {
                    console.error("request to state api went wrong:", err.message, err);
                })
        })
    }, [])


    if (!ready) return <ActivityIndicator />
    return (<>
        <Filter searchText={(text) => { setSearchText(text) }} />
        <ScrollView horizontal={true} style={styles.container}>
            <StatesList />
            <StatesFiler searchText={searchText} />
            {modal && <StateDetails currentState={modal} />}
        </ScrollView>
    </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginTop: "5%"
    }
});

export default States;
