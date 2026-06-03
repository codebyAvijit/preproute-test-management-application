import illustration from "@/assets/images/login-illustration.png";

const LoginIllustration = () => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-2xl px-8">
        <img
          src={illustration}
          alt="Login Illustration"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default LoginIllustration;