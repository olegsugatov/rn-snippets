email: 'admin@com',
password: 'admin@com'

// POST 
async onLoginPressed() {
	try {
		let response = await fetch('https://mobile.aidbox.io/signin', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Component-Type': 'application/json'
			},
			body: JSON.stringify({
				email: 'admin@com',
				password: 'admin@com'
			})
		})
	} catch (error) {
		console.log();
	}
}



export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password: "",
      error: ""
      
    }
  }

// GET
async onLoginPressed() {
  this.setState({showProgress: true})
  try {
    
    let response = await fetch('https://mobile.aidbox.io/fhir/Patient', {
                   method: 'GET',
                   headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    }
                  });

    var patients = (JSON.parse(response._bodyInit).entry);
    patients.map(function(p){
      console.log(p.resource.name[0].given[0]);
    });

      console.log(p.resource.name);

    response.then(function(r){
      console.log(r);
    })
  
    let res = await response.text();
    let us = await response.text();
    if (response.status >= 200 && response.status < 300) {
        //Handle success
        let user = us;
        let accessToken = res;
        console.log(accessToken);
        console.log(user);
        //On success we will store the access_token in the AsyncStorage
        this.storeToken(accessToken);
        // this.redirect('home');
    } else {
        //Handle error
        let error = res;
        throw error;
    }
  } catch(error) {
      this.setState({error: error});
      console.log("error " + error);
      this.setState({showProgress: false});
  }
}





// ActivityIndicatorIOS, AsyncStorage

// const ACCESS_TOKEN = 'access_token';

// async storeToken(accessToken) {
//   try {
//     await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
//     this.getToken();
//   } catch (error) { 
//     console.log("somethin went wrong");
//   }
// }

// async getToken (accessToken) {
//   try {
//     let token = await AsyncStorage.getItem(ACCESS_TOKEN);
//     console.log("token is: " + token);
//   } catch (error) { 
//     console.log("somethin went wrong");
//   }
// }

// async removeToken (accessToken) {
//   try {
//     await AsyncStorage.removeItem(ACCESS_TOKEN);
//     this.getToken();
//   } catch (error) { 
//     console.log("somethin went wrong");
//   }
// }



const onButtonPress = () => {
  Alert.alert('Beep!');
};

ListView, Alert, Button,