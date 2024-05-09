'use server'

import { signIn, signOut } from "@/auth"

export async function doSignOut(){
    await signOut();
}
export async function doSignIn(){
    await signIn("google",{
        callbackUrl:"http://localhost:3000"
    });
}
export async function login(formData) {
    console.log(formData.get("email"),"  ",formData.get("password"));
    try {
      const response = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        
        redirect: false,
      });
      return response;
    } catch (err) {
      throw err;
    }
  }