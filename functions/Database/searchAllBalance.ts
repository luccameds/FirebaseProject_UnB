import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';

export default async function SearchAllBalanceFunction() {
  const querySnapshot = await getDocs(collection(db, 'balance'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}
