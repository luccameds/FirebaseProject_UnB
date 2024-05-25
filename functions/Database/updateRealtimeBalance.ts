import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase';

export default function UpdateRealtimeBalanceFunction() {
  const unsub = onSnapshot(
    doc(db, 'balance', '0wrGrvEyku3LechyqWkV'),
    (doc) => {
      console.log('Current data: ', doc.data());
    }
  );

  return unsub;
}
