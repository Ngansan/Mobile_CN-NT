import { SafeAreaView } from "react-native";
import Feed from "./screens/Feed";

export default function App(){
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Feed />
    </SafeAreaView>
  );
}