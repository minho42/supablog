import { useState } from "react";
import { supabase } from "../utils/supabase";

export default function LoginPage({}) {
  const [errorMessage, setErrorMessage] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(e.target.email.value);
  // };

  const handleTwitterLogin = async () => {
    const { user, session, error } = await supabase.auth.signIn({ provider: "twitter" });
    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col  justify-start min-h-screen bg-purple-100 space-y-3">
      <h1 className=" ">Login</h1>

      <div className="flex flex-col items-center space-y-6">
        {/* <form onSubmit={handleSubmit} className="flex w-full flex-col items-center space-y-2 justify-between">
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md px-3 py-1 "
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 rounded-md px-3 py-1 "
            />
          </label>
          <button className="bg-black text-white rounded-full px-6 py-2">Login</button>
        </form> */}

        <div>
          <button onClick={handleTwitterLogin} className="bg-blue-600 text-white rounded-full px-6 py-2">
            Sign in with Twitter 🐦
          </button>
        </div>
        {errorMessage && <div className="text-pink-700">{errorMessage}</div>}
      </div>
    </div>
  );
}
