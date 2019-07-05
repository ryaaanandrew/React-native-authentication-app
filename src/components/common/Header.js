import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles;

    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.2,
        paddingTop: 30
    },
    textStyle: {
        fontSize: 20,
    }
};

export { Header };