import React, { useState } from 'react';
import {
    StyleSheet,
} from 'react-native';
import StatesList from "./StatesList";

const StatesFiler = (props) => {

    return (
        <>
            <StatesList searchableComponent={true} searchText={props.searchText} />
        </>
    );
};

const styles = StyleSheet.create({
});

export default StatesFiler;
