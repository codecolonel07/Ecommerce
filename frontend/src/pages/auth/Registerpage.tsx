import TextInput from "../../components/forms/TextInput";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="w-full max-w-md p-8 shadow-lg rounded-2xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <div className="flex flex-col gap-4">
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <TextInput
            label="Password"
            type="password"
            placeholder="Enter password"
          />

          <button className="bg-black text-white py-3 rounded-lg">
            Login
          </button>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;