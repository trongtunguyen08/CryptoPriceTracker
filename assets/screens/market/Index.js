import { StatusBar } from 'expo-status-bar';
import React, {useRef, useMemo, useState, useEffect} from 'react';
import { FlatList, Text, View, SafeAreaView } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Styles from './Style.js';
import CryptoItem from '../../components/cryptoitem/Index.js';
import { SAMPLE_DATA } from '../../data/sampleData.js';
import Chart from '../../components/chart/Index.js';
import { getMarketData } from '../../services/CryptoService.js';

const MarketPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMerketData = async() => {
            const marketData = await getMarketData();
            setData(marketData);
        }

        fetchMerketData()
    }, [])

    const [selectedCoinData, setSelectedCoinData] =  useState(null);

    const bottomSheetModalRef = useRef(null);

    const snapPoints = useMemo(() => ['50%'], []);

    const openModal = (item) => {
        setSelectedCoinData(item)
        bottomSheetModalRef.current.present();
    }

    return (
        <BottomSheetModalProvider>
            <SafeAreaView style={Styles.container}>
                <StatusBar style='dark'/>
                <View style={Styles.titleWrapper}>
                    <Text style={Styles.titleText}>Markets</Text>
                </View>
                <View style={Styles.divider} />

                <FlatList
                    contentInsetAdjustmentBehavior='automatic'
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    data={data}
                    renderItem={({item}) => (
                        <CryptoItem
                            name={item.name}
                            symbol={item.symbol}
                            currentPrice={item.current_price}
                            priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
                            logoUrl={item.image}
                            onPress={() => openModal(item)}
                        />
                    )}
                />
            </SafeAreaView>

            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                style={Styles.bottomSheetWrapper}
            >
                {
                    selectedCoinData
                    ?
                    <Chart
                        name={selectedCoinData.name}
                        symbol={selectedCoinData.symbol}
                        currentPrice={selectedCoinData.current_price}
                        priceChangePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
                        logoUrl={selectedCoinData.image}
                        sparkline={selectedCoinData.sparkline_in_7d.price}
                    />
                    : null
                }
            </BottomSheetModal>
        </BottomSheetModalProvider>
    )
}

export default MarketPage


