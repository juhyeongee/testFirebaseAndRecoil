import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Pressable, Text, View } from "react-native";

import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
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

const firestore = getFirestore(myApp);
export const sendDataToFirebase = async () => {
  await setDoc(doc(firestore, "characters", "mario"), {
    employment: "plumber",
    outfitColor: "red",
    specialAttack: "fireball",
  });
};
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Pressable
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            onPress={sendDataToFirebase}
          >
            <Text>여기 </Text>
          </Pressable>
        </View>
      </SafeAreaProvider>
    );
  }
}
