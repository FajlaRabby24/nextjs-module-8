"use client";

import SubmitButton from "@/components/SubmitButton";
import { createUserWithState } from "@/lib/actions";
import { useActionState, useRef } from "react";

const CreateUserWithStatePage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const initialState = {
    message: "",
    success: false,
  };

  const [state, formAction, isPending] = useActionState(
    createUserWithState,
    initialState
  );

  if (state.success) {
    formRef.current?.reset();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white text-black p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Create User</h1>
        <form ref={formRef} action={formAction}>
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
          <SubmitButton />

          {state.message && (
            <p
              className={
                state.success ? "text-green-500 pt-2" : "pt-2 text-red-500"
              }
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateUserWithStatePage;
