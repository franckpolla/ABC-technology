import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/app/firebaseConfig"; // Replace with your Firebase configuration import

// Define a type for Firebase Auth errors
interface FirebaseAuthError extends Error {
  code: string;
}

export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return {
      success: true,
      message: "Password reset email sent successfully.",
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Cast error to FirebaseAuthError if it has a 'code' property
      const firebaseError = error as FirebaseAuthError;

      // Handle specific Firebase Auth errors
      switch (firebaseError.code) {
        case "auth/invalid-email":
          return {
            success: false,
            message: "Invalid email address. Please check and try again.",
          };
        case "auth/user-not-found":
          return {
            success: false,
            message: "No user found with this email address.",
          };
        case "auth/too-many-requests":
          return {
            success: false,
            message: "Too many requests. Please try again later.",
          };
        default:
          return {
            success: false,
            message: "An error occurred. Please try again.",
          };
      }
    } else {
      return { success: false, message: "An unexpected error occurred." };
    }
  }
};
