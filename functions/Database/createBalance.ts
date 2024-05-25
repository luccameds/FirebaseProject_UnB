import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';

interface BalanceProps {
  name: string;
  balance: number;
}

export default async function CreateBalanceFunction(props: BalanceProps) {
  try {
    await addDoc(collection(db, 'balance'), {
      name: props.name,
      balance: props.balance,
      createdAt: new Date(),
    });
  } catch (e) {
    return e;
  }
}
