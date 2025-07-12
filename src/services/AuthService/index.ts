"use client";

import { AuthError, User } from "@supabase/supabase-js";

// Initialize Supabase client for client-side usage
// createClientComponentClient();
// const supabase = "";

export interface IAuthResponse {
  user: User | null;
  error: AuthError | null;
}

// ====================
// Register new user
// Supabase handles user creation and sends confirmation email if configured
// ====================
// export const registerUser = async (
//   email: string,
//   password: string,
//   name?: string
// ): Promise<IAuthResponse> => {
//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       data: {
//         name, // store user name in metadata
//       },
//     },
//   });

//   return { user: data.user, error };
// };

// ====================
// Login existing user
// Use email and password to sign in
// ====================
// export const loginUser = async (
//   email: string,
//   password: string
// ): Promise<IAuthResponse> => {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   return { user: data.user, error };
// };

// ====================
// Logout current user
// Ends the session on Supabase
// ====================
// export const logoutUser = async (): Promise<{ error: AuthError | null }> => {
//   const { error } = await supabase.auth.signOut();
//   return { error };
// };

// ====================
// Get current authenticated user
// Returns IUser or null if no logged in user
// ====================
// export const getCurrentUser = async (): Promise<IUser | null> => {
//   const { data, error } = await supabase.auth.getUser();

//   if (error || !data.user) return null;

//   return {
//     id: data.user.id,
//     email: data.user.email || "",
//     name: data.user.user_metadata?.name || "",
//   };
// };

// ====================
// Change current user password
// ====================
// export const changePassword = async (
//   newPassword: string
// ): Promise<{ error: AuthError | null }> => {
//   const { error } = await supabase.auth.updateUser({
//     password: newPassword,
//   });

//   return { error };
// };
