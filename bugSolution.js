const db = getFirestore();

const docRef = doc(db, "cities", "BJ");

getDoc(docRef).then((docSnapshot) => {
  if (docSnapshot.exists()) {
    const city = docSnapshot.data();
    console.log("Document data:", city);
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.error("Error getting document:", error);
});