import { useState } from "react";
import { useForm } from "react-hook-form";
import { emailRegex } from "../utils/validation";

export default function Register() {
  const [success, setSuccess] = useState(null);
  const { register, handleSubmit, setError, errors, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
      accessLevel: "",
    },
  });

  const clearSuccess = () => {
    if (success) setSuccess(null);
  };
  const onSubmit = async (data) => {
    try {
      const postForm = await fetch("/api/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
      const res = await postForm.json();
      if (postForm.ok) {
        setSuccess(res.message);
        reset();
      } else {
        // validation error from server
        setError("email", { type: "manual", message: res.message });
      }
    } catch (err) {
      //TODO: This only catches network failure etc, should probably handle this better
      setError("email", { type: "manual", message: err.message });
    }
  };
  return (
    <>
      <h2 className="font-bold text-xl font-semibold">Sign Up for DCIA</h2>
      <br />
      <form
        className="w-full max-w-sm"
        onSubmit={handleSubmit(onSubmit)}
        onChange={clearSuccess}
      >
        <div className="font-semibold text-green-600">{success}</div>

        <div className="font-semibold text-red-600" id="form-errors">
          {errors && errors.email?.message}
          <br />
          {errors && errors.password?.message}
          <br />
          {errors && errors.accessLevel?.message}
        </div>

        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          name="email"
          ref={register({
            required: "Email is required",
            pattern: {
              value: emailRegex,
              message: "Not a valid email address.",
            },
          })}
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
          name="password"
          ref={register({
            required: "Password is required",
          })}
        />

        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="accessLevel"
        >
          Access Level
        </label>
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          name="accessLevel"
          ref={register({
            required: "Access level is required",
          })}
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
