import { auth } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { loginUser } from './loginUser';
import { useUserStore } from '@/store/user/userStore';

export const registerUser = async (email: string, password: string) => {
  const { setUser } = useUserStore();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed up
    const user = userCredential.user;
    await loginUser(email, password);
    setUser(user.uid);
  } catch (error) {
    if (
      error &&
      typeof error === 'object' &&
      'code' in error &&
      'message' in error
    ) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }
};
