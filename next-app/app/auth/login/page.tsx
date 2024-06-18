import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="mx-auto w-5/6 text-purple-900">
        <h1 className="m-4 pb-2 pt-4 text-center text-2xl font-bold">
          Social Login
        </h1>
        <Link href={"/api/auth/signin"}>
          <Image
            className="mx-auto mt-4 w-1/2"
            src="/image/web_neutral_rd_SI@4x.png"
            alt="google login"
            width={200}
            height={200}
          />
        </Link>
      </div>
    </div>
  );
};

export default Login;
