import { StyleSheet } from 'react-native';
import Colors from '../../colors/Colors.js';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    titleWrapper: {
        marginTop: 40,
        paddingHorizontal: 16
    },
    titleText: {
        fontSize: 24,
        fontFamily: 'MontserratBold',
        color: Colors.dark
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: Colors.gray,
        marginHorizontal: 16,
        marginTop: 16
    },
    bottomSheetWrapper: {
        shadowColor: Colors.dark,
        shadowOffset: {
            width: 0,
            height: -4
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
})

export default Styles