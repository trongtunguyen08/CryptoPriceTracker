import React, { useEffect, useState } from 'react';
import { Image, Text, View, Dimensions } from 'react-native';
import { ChartDot, ChartPath, ChartPathProvider, ChartYLabel } from '@rainbow-me/animated-charts';
import Colors from '../../colors/Colors.js';
import Styles from './Style';
import { useSharedValue } from 'react-native-reanimated';

export const {width: SIZE} = Dimensions.get('window');

const Chart = (props) => {
    const {currentPrice, logoUrl, name, symbol, priceChangePercentage7d, sparkline} = props;

    const latestCurrnetPrice = useSharedValue(currentPrice);

    const [chatReady, setChatReady] = useState(false);

    useEffect(() => {
        latestCurrnetPrice.value = currentPrice;
        setTimeout(() => {
            setChatReady(true);
        }, 0)
    }, [currentPrice])

    const formatUSD = value => {
        'worklet';
        if (value === '') {
            return `$${latestCurrnetPrice.value.toLocaleString('en-US', {currency: 'USD'})}`;
        }
        const formattedValue = `$${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
        return formattedValue
    };

    return (
        <ChartPathProvider data={{ points: sparkline, smoothingStrategy: 'bezier' }}>
            <View style={Styles.chartWrapper}>
                <View style={Styles.upperTitles}>
                    <View style={Styles.left}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={{uri: `${logoUrl}`}} style={Styles.image} />
                            <Text style={Styles.title}>{name} ({symbol.toUpperCase()})</Text>
                        </View>
                        <ChartYLabel
                            format={formatUSD}
                            style={Styles.priceText}
                        />
                        {/* <Text style={Styles.priceText}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text> */}
                    </View>

                    <View style={Styles.right}>
                        <Text style={Styles.subTitle}>7d</Text>
                        <Text style={[Styles.priceChangePercentText, {color: priceChangePercentage7d > 0 ? Colors.green : Colors.red}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                    </View>
                </View>

                {
                    chatReady
                    ?
                    <View style={Styles.chartLineWrapper}>
                        <ChartPath height={SIZE / 2} stroke={Colors.dark} width={SIZE} />
                        <ChartDot style={{ backgroundColor: Colors.dark }} />
                    </View>
                    : null
                }
                
            </View>
        </ChartPathProvider>
    )
}

export default Chart
