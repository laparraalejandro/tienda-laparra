import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    //OBJETO DE FIREBASE
    apiKey: "AIzaSyBfdGijqaJCPxmLcaMvsQiDq8U_7y8473M",
    authDomain: "tienda-laparra-react-1.firebaseapp.com",
    projectId: "tienda-laparra-react-1",
    storageBucket: "tienda-laparra-react-1.appspot.com",
    messagingSenderId: "163387868381",
    appId: "1:163387868381:web:3828d64f047b427cfb0734"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}

//03:06:16
