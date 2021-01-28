import React, { useState } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import { Searchbar } from 'react-native-paper';

const Filter = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => {
        props.searchText(query);
        setSearchQuery(query);
    };

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: "100%"
    }
});

export default Filter;
