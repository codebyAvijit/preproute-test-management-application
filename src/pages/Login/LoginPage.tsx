import LoginForm from "./LoginForm";
import LoginIllustration from "./LoginIllustration";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        <LoginIllustration />

        <div className="flex items-center justify-center p-4 sm:p-6 lg:p-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;