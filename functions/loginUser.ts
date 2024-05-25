import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../config/firebase';

interface LoginUserFunctionProps {
  email: string;
  password: string;
}

export default function LoginUserFunction(props: LoginUserFunctionProps) {
  signInWithEmailAndPassword(auth, props.email, props.password)
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
