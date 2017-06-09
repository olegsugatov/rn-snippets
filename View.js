<View style={styles.container}>
  <StatusBar
    barStyle="light-content"/>

  <Text style={styles.welcomeText}>{this.props.text}</Text>
  
  <Button
    onPress={()=> this.props.navigator.pop()}
    title="Back to Homepage"
    color="#FFF"
    accessibilityLabel="Learn more about this purple button"
  />
</View>