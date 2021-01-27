import React, { useState } from 'react';
import {
    StyleSheet,
} from 'react-native';
import StatesList from "./StatesList";
import Filter from "../modules/Filter";

const StatesFiler = () => {
    const [searchText, setSearchText] = useState("");

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
