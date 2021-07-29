import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Styles from './Style.js';
import Colors from '../../colors/Colors.js';

const CryptoItem = (props) => {
    const {name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress} = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={Styles.itemWrapper}>
                {/* Left side */}
                <View style={Styles.leftWrapper}>
                    <Image style={Styles.image} source={{uri: logoUrl}} />
                    <View style={Styles.titlesWrapper}>
                        <Text style={Styles.title}>{name}</Text>
                        <Text style={[Styles.subtitle, {color: Colors.red}]}>{symbol.toUpperCase()}</Text>
                    </View>
                </View>
                
                {/* Right side */}
                <View style={Styles.rightWrapper}>
                    <Text style={Styles.title}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
                    <Text style={[Styles.subtitle, {color: priceChangePercentage7d > 0 ? Colors.green : Colors.red}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CryptoItem


