import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="btn btn-primary mt-4 btn-block"
      type="submit"
    >
      {pending ? (
        <span className="loading text-black loading-spinner loading-sm"></span>
      ) : (
        "Create user"
      )}{" "}
    </button>
  );
};

export default SubmitButton;
