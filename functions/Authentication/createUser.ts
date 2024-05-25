import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

interface CreateUserFunctionProps {
  email: string;
  password: string;
}

function CreateUserFunction(props: CreateUserFunctionProps) {
  createUserWithEmailAndPassword(auth, props.email, props.password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      return { errorCode, errorMessage };
    });
}

export default CreateUserFunction;
