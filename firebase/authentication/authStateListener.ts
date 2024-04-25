import { auth } from '@/firebase';
import { router } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';

export const authStateListener = (
  setIsLoading: (isLoading: boolean) => void
) => {
  onAuthStateChanged(auth, (user) => {
    setIsLoading(false);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      return router.replace('/landing');
    }
  });
};
