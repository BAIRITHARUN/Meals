import { Children, FC } from "react";
import { StyleSheet, View, Text } from "react-native";

type SubTitleProp = {
    children: string
}

const SubTitle: FC<SubTitleProp> = (props: SubTitleProp) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{props.children}</Text>
        </View>
    )
}

export default SubTitle

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    }
})