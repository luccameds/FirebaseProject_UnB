import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export default async function SearchSpecificBalanceFunction(props: {
  id: string;
}) {
  const docRef = doc(db, 'balance', props.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    console.log('No such document!');
  }
}
