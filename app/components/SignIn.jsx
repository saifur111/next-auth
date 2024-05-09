import Link from "next/link";
import React from "react";
import { doSignIn } from "../actions";

const SignIn = () => {
  return (
    <form action={doSignIn}>
      <button type="submit" className="bg-orange-400 p-1 rounded-md m-1">
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
