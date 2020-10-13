import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessLevel, setAccessLevel] = useState(null);
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formContents = {
        email: email,
        password: password,
        accessLevel: accessLevel,
      };
      const posted = await fetch("/api/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formContents),
      });
      if (posted.ok) {
        const response = await posted.json();
        setSuccess(response.message);

        // Clear form
        setEmail("");
        setPassword("");
        setAccessLevel("");
      } else {
        //TODO: If form validation error, focus/outline offending fields and display error text.
        // Otherwise, just display error text.
        const response = await posted.json();
        setErrors(response.message);
      }
    } catch (err) {
      //TODO: Handle network errors
      setErrors(err);
    }
  };
  return (
    <>
      <h2 className="text-xl font-semibold">Sign Up for DCIA</h2>

      {success && <h2 className="font-bold text-green-500">{success}</h2>}
      {errors && <h2 className=" font-bold text-red-500">{errors}</h2>}
      <br />
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="accessLevel"
        >
          Access Level
        </label>
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="accessLevel"
          onBlur={(e) => setAccessLevel(e.target.value)}
          defaultValue={""}
        >
          <option value="" disabled>
            Select an Option
          </option>
          <option value="instructor">Instructor</option>
          <option value="admin">Administrator</option>
        </select>

        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Sign Up
        </button>
      </form>

      <span>
        Already have an account? <a href="/sign-in">Sign in</a>
      </span>
    </>
  );
}
