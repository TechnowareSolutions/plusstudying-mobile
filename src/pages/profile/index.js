import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export function Profile({ token }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Página Profile</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 32,
    paddingStart: 14,
    paddingEnd: 14
  }
})
