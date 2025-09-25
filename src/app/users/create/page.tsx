"use client";

import { createUser } from "@/lib/actions";
import { useRef } from "react";

const CreateUserPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const haneSubmit = async (formData: FormData) => {
    const result = await createUser(formData);
    if (result.success) {
      alert(result.message);
      formRef.current?.reset();
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white text-black p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Create User</h1>
        <form ref={formRef} action={haneSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="input w-full bg-white border border-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="input w-full mt-2 bg-white border border-black"
          />
          <button className="btn btn-primary mt-4 btn-block" type="submit">
            Create user
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserPage;
