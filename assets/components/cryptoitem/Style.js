import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 48,
        height: 48
    },
    titlesWrapper: {
        marginLeft: 5
    },
    title: {
        fontSize: 18,
        fontFamily: 'MontserratSemiBold',
        color: Colors.dark
    },
    subtitle: {
        fontSize: 14,
        marginTop: 4
    },
    rightWrapper: {
        alignItems: 'flex-end'
    }
})

export default Styles