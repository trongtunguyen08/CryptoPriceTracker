import { ColorPropType, StyleSheet } from 'react-native';
import Colors from '../../colors/Colors.js';

const Styles = StyleSheet.create({
    upperTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    left: {
        flexDirection: 'column',
        marginLeft: 16
    },
    image: {
        width: 24,
        height: 24,
    },
    title: {
        fontSize: 16,
        marginLeft: 8,
        color: Colors.gray,
        fontFamily: 'Montserrat'
    },
    priceText: {
        fontSize: 28,
        marginTop: 8,
        fontFamily: 'MontserratBold'
    },
    right: {
        alignItems: 'flex-end',
        marginRight: 16
    },
    subTitle: {
        fontFamily: 'Montserrat',
        color: Colors.gray,
        fontSize: 14
    },
    priceChangePercentText: {
        fontSize: 21,
        marginTop: 12,
        fontFamily: 'Montserrat',
    },
    chartLineWrapper: {
        marginTop: 40
    }

})

export default Styles