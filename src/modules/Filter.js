import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native';

import { Searchbar } from 'react-native-paper';

const Filter = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => {
        props.searchText(query);
        setSearchQuery(query);
    };

    return (
        <SafeAreaView>

            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
});

export default Filter;
