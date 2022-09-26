import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBE1-lTShMJL7c7ggeyCo7LH3lS5appIrs",
    authDomain: "testproductver1.firebaseapp.com",
    projectId: "testproductver1",
    storageBucket: "testproductver1.appspot.com",
    messagingSenderId: "419869963979",
    appId: "1:419869963979:web:3732c65169575d67bc8d4e",
    measurementId: "G-6WEB2HM63L",
  }; // apiKey, authDomain, etc. (see above)

  let myApp = initializeApp(firebaseConfig);

  const sendDataToFirebase = async () => {
    await setDoc(doc(firestore, "characters", "mario"), {
      employment: "plumber",
      outfitColor: "red",
      specialAttack: "fireball",
    });
  };

  const firestore = getFirestore(myApp);

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
