"use client";

import { useRouter } from "next/navigation";
import { loginInstance } from "@/api/api";
import { useState, ChangeEvent, FormEvent } from "react";

export interface FormData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginInstance(formData);

    if (localStorage.getItem("token")) {
      router.push("/");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-[30%] py-16 bg-slate-400 rounded-md shadow-lg ">
        <form
          onSubmit={submitForm}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="mb-3 flex flex-col items-center">
            <label className="form-label text-white">Username</label>
            <input
              className="form-control w-[100%]"
              type="text"
              name="username"
              value={formData.username}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="mb-3 flex flex-col items-center">
            <label className="form-label text-white">Password</label>
            <input
              className="form-control w-[100%]"
              type="password"
              name="password"
              value={formData.password}
              onChange={inputChangeHandler}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-slate-800 py-4 px-5 rounded-lg bg-slate-800w-[30%]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
