  async getPatientInfo() {
    try {
      let response = await fetch('https://mobile.aidbox.io/fhir/Patient', {
                                method: 'GET',
                                headers: {
                                  'Accept': 'application/json',
                                  'Content-Type': 'application/json',
                                }
                              });
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
    //     //Handle success
        let accessToken = res;
        console.log(accessToken);
    //     // this.navigate('aboutPage', 'Hello Oleg!');
    //     // onPress={() => { this.setState({selectedTab: 'patients' });}}
        let patients = (JSON.parse(response._bodyInit).entry);
    
        patients.map(function(p){
          // console.log(p.resource.name[0].given[0]);
          let patients_array = (p.resource.name[0].given[0]);
          console.log(patients_array);
        });
        this.setState({selectedTab: 'user_info' });
    //     //On success we will store the access_token in the AsyncStorage
    //     // this.storeToken(accessToken);
    //     // this.redirect('home');
      } else {
    //     //Handle error
        let error = res;
        throw error;
        }
      } catch(error) {
        this.setState({error: error});
        console.log("error " + error);
        this.setState({showProgress: false});
      }
  }

  async getMoviesFromApi() {
    try {
      let response = await fetch('https://mobile.aidbox.io/users');
      let responseJson = await response.json();
      return responseJson.movies;
      // console.log(responseJson.movies);
    } catch(error) {
      // console.error(error);
      }
  }

    async getPatientInfo() {
    // try {
      let response = await fetch('https://mobile.aidbox.io/fhir/Patient', {
                                  method: 'GET',
                                  headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                  }
                                });

    let patients = (JSON.parse(response._bodyInit).entry);
    
    patients.map(function(p){
      // console.log(p.resource.name[0].given[0]);
      let patients_array = (p.resource.name[0].given[0]);
      console.log(patients_array);
    });
    
    response.then(function(r){
      console.log(r);
    })
    }

  async getUserInfo() {
    // try {
      let response = await fetch('https://mobile.aidbox.io/users', {
                                  method: 'GET',
                                  headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                  }
                                });

      let users = JSON.parse(response._bodyInit);
      
      users.map(function(z) {
        console.log(z.data);
        // console.log(JSON.parse(z.data.age));
      });
    }

  async function getPatientInfo() {
    try {
      let response = await fetch('https://mobile.aidbox.io/fhir/Patient');
      let responseJson = await response.json();
      return responseJson.movies;
    } catch(error) {
      console.error(error);
    }
  }