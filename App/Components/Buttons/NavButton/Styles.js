import { StyleSheet } from 'react-native'

import { Metrics, Colors, Fonts } from 'App/Themes'

export default StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: Metrics.unit * 2,
    justifyContent: 'center'
  },
  text: {
    ...Fonts.style.normalBold,
    color: Colors.primary
  }
})
