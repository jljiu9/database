import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getMetadata ,getDownloadURL ,uploadBytes} from "firebase/storage";
import { createReadStream, readFileSync } from "fs";

const firebaseConfig = {
  storageBucket: 'gs://xxxx-c0c6b.appspot.com'
}
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// let img = ref(storage,'testdogpic2.gif')
// // 'file' comes from the Blob or File API
// uploadBytes(img, readFileSync('testdogpic2.gif')).then((snapshot) => {
//   console.log('Uploaded a blob or file!');
// });


listAll(ref(storage, 'jljiu'))
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      console.log(folderRef.name)
    });
    res.items.forEach((itemRef) => {
      console.log(itemRef.name)
      getDownloadURL(itemRef).then(x=>console.log(x))
      getMetadata(itemRef)
        .then((metadata) => {
          console.log(metadata.md5Hash)
        })
        .catch(console.log);
    });
  }).catch(console.log);