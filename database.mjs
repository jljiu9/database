import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get,set } from "firebase/database";
const firebaseConfig = {
  databaseURL: "https://xxxx-c0c6b-default-rtdb.asia-southeast1.firebasedatabase.app",
}
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function writeUserData() {
  set(ref(db, 'obj'), {
    username: 'xx',
    email: 'email',
    profile_picture : 'imageUrl'
  });
}
writeUserData()
const dbRef = ref(getDatabase(app));
get(child(dbRef, 'obj')).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
})
