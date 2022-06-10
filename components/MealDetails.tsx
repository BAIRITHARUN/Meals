import { FC, ReactNode } from 'react'
import { StyleSheet, View, Text } from 'react-native'

type MealDetailsProps = {
    duration: number | undefined,
    complexicity: string | undefined,
    affordability: string | undefined
    // style: {},
    textStyle: {}

}

const MealDetails: FC<MealDetailsProps> = (props: MealDetailsProps) => {
    return (
        <View style={styles.details}>
            <Text style={[styles.detailItem, props.textStyle]}>{props.duration}</Text>
            <Text style={[styles.detailItem, props.textStyle]}>{props.complexicity?.toUpperCase()}</Text>
            <Text style={[styles.detailItem, props.textStyle]}>{props.affordability?.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,

    }
})