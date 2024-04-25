import { auth } from '@/firebase';
import { router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;

    if (user) router.replace('/');
  } catch (error) {
    if (
      error &&
      typeof error === 'object' &&
      'code' in error &&
      'message' in error
    ) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Incorrect email or password.');
    }
  }
};
