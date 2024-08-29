import { auth } from "@/app/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return {
      success: true,
      message: "Password reset email sent successfully.",
    };
  } catch (error) {
    if (error instanceof Error) {
      // Handle specific Firebase Auth errors
      switch (error.code) {
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
