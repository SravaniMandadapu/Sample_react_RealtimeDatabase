import * as firebase from "firebase/app"
import "firebase/database"

var config = {
    apiKey: "AIzaSyDcsAezg4wk_gW0cYLIFQFcc2m520uIGK8",
    authDomain: "sample-tutorial-deb3f.firebaseapp.com",
    databaseURL: "https://sample-tutorial-deb3f.firebaseio.com",
    storageBucket: "sample-tutorial-deb3f.appspot.com",
    projectId:"sample-tutorial-deb3f"
  };
  firebase.initializeApp(config);
  var database=firebase.database()

  export default database