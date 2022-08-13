import { View, Text } from 'react-native'
import { useState } from 'react'

import { EthPrice, NFTTitle } from "./SubInfo"
import { COLORS, SIZES, FONTS } from "../constants"

const DetailsDesc = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, 100))
    const [readMore, setReadMore] = useState(false)
  return (
    <>
        <View style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <NFTTitle 
                title={data.name}
                subTitle={data.creator}
                titleSize={SIZES.extraLarge}
                subTitleSize={SIZES.font}
            />
            <EthPrice price={data.price} />
        </View>

        <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
            <Text style={{
                fontSize: SIZES.large,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
            }}>Description</Text>
            <View style={{ marginTop: SIZES.base }}>
                <Text style={{
                    fontSize: SIZES.medium,
                    fontFamily: FONTS.regular,
                    color: COLORS.secondary,
                    lineHeight: SIZES.extraLarge,
                }}>
                    {text}
                    {!readMore && "..."}
                    <Text style={{
                        fontSize: SIZES.medium,
                        fontFamily: FONTS.semiBold,
                        color: COLORS.primary,
                    }}
                    onPress={() => {
                        if(!readMore) {
                            setText(data.description)
                            setReadMore(true)
                        } else {
                            setText(data.description.slice(0, 100))
                            setReadMore(false)
                        }
                    }}
                    >
                        {readMore ? " Show Less" : " Read More"}

                    </Text>
                </Text>

            </View>
        </View>
    </>
  )
}

export default DetailsDesc