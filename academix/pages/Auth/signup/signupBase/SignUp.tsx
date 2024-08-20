"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRegisterMutation } from "../../../../redux/features/auth/authApi";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter from Next.js

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const Signup: FC = () => {
  const [show, setShow] = useState(false);
  const [register, { data, error, isSuccess }] = useRegisterMutation();
  const router = useRouter(); // Initialize useRouter hook

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Registration successful";
      toast.success(message);
      router.push("/Auth/verification"); // Navigate to verification page
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      const data = {
        name,
        email,
        password,
      };
      await register(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="flex w-full justify-center py-3 bg-white pt-15">
      <div className="flex min-h-full max-w-lg flex-1 flex-col justify-center px-6 py-6 lg:px-8">
        <div className="w-full">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="/inboxImage/AcademiXProjectPortal-icon.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Join Us
          </h2>
        </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">
                Enter your Name
              </label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                id="name"
                placeholder="johndoe"
                className={`${
                  errors.name && touched.name && "border-red-500"
                } ${styles.input}`}
              />
              {errors.name && touched.name && (
                <span className="text-red-500 pt-2 block">{errors.name}</span>
              )}
            </div>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">
              Enter your Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="loginmail@gmail.com"
              className={`${
                errors.email && touched.email && "border-red-500"
              } ${styles.input}`}
            />
            {errors.email && touched.email && (
              <span className="text-red-500 pt-2 block">{errors.email}</span>
            )}
            <div className="w-full mt-5 relative mb-1">
              <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">
                Enter your Password
              </label>
              <input
                type={!show ? "password" : "text"}
                name="password"
                value={values.password}
                onChange={handleChange}
                id="password"
                placeholder="password!@%"
                className={`${
                  errors.password && touched.password && "border-red-500"
                } ${styles.input}`}
              />
              {!show ? (
                <AiOutlineEyeInvisible
                  className="absolute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShow(true)}
                />
              ) : (
                <AiOutlineEye
                  className="absolute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShow(false)}
                />
              )}
            </div>
            {errors.password && touched.password && (
              <span className="text-red-500 pt-2 block">{errors.password}</span>
            )}
            <div className="w-full mt-5">
              <input
                type="submit"
                value="Sign Up"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />
            </div>
            <br />
            <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
              Or join with
            </h5>
            <div className="flex items-center justify-center my-3">
              <FcGoogle size={30} className="cursor-pointer mr-2" />
              <AiFillGithub size={30} className="cursor-pointer ml-2" />
            </div>
            <h5 className="text-center pt-4 font-Poppins text-[14px]">
              Already have an account?{" "}
              <Link
                href="/Auth/login"
                className="text-[#2190ff] pl-1 cursor-pointer"
              >
                Sign in
              </Link>
            </h5>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
};

const styles = {
  title:
    "text-[25px] text-black dark:text-white font-[500] font-Poppins text-center py-2",
  label: "text-[16px] font-Poppins text-black dark:text-white",
  input:
    "w-full text-black dark:text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins",
  button:
    "flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[45px] w-full text-[16px] font-Poppins font-semibold",
};

export default Signup;
