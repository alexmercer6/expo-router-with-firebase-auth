import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';

export const logoutUser = () => {
  signOut(auth);
};
