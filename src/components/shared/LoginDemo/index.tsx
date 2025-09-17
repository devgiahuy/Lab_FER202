import { Button, Input, Link } from "@heroui/react";
import React, { useState } from "react";
import Logo from "../../styled/Logo";

import Forgot from "../../modules/Forgot";

import ButtonGoogle from "../../styled/ButtonGoogle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { EyeIcon } from "@phosphor-icons/react";

export default function LoginDemo() {
  // const [action, setAction] = React.useState(null);
  // const [isSelected, setIsSelected] = React.useState(false);

  const [isShowPassword, setIsShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      // confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required")
        .min(4, "Username must be at least 4 characters")
        .max(10, "Username must be at most 10 characters"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
      // validate confirm password dựa vào password
      // điểm cộng của formik là nó có thể validate dựa vào nhiều field
      // confirmPassword: Yup.string()
      //   .oneOf([Yup.ref("password")], "Passwords must match")
      //   .required("Please confirm your password"),
    }),
    onSubmit: async (values) => {
      // Promise tự nghiên cứu
      // nó ngủ trong vòng 4s, sau 4s mới thực thi logic
      await new Promise((resolve) => setTimeout(resolve, 4000));
      // logic thực thi
      alert(JSON.stringify(values));
    },
  });

  return (
    // <div className="flex justify-center mt-50">
    //   <Form
    //     className="w-125 h-131 max-w-4xs flex flex-col gap-4
    //               bg-gray-400 rounded-2xl"
    //     onReset={() => setAction("reset")}
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       const data = Object.fromEntries(new FormData(e.currentTarget));

    //       setAction(`submit ${JSON.stringify(data)}`);
    //     }}
    //   >
    //     <Logo />
    //     <InputLogin />
    //     <Forgot />
    //     <ButtomSubmit />

    //     {/* <!-- Divider với chữ Or --> */}
    //     <div className="w-full max-w-sm mx-auto text-center space-y-4">
    //       <div className="flex items-center">
    //         <div className="flex-1 h-px bg-gray-300"></div>
    //         <span className="px-3 text-gray-500 text-sm">Or</span>
    //         <div className="flex-1 h-px bg-gray-300"></div>
    //       </div>
    //     </div>

    //     <ButtonGoogle/>

    //     <div className="ml-44">
    //       <span>No account?</span>
    //       <Link>Sign Up</Link>
    //     </div>
    //     {/* {action && <div className="text-small text-default-500"></div>} */}
    //   </Form>
    // </div>

    <div className="flex justify-center mt-50">
      <div
        className="flex flex-col gap-4
                    w-125 h-131 max-w-4xs
                   bg-gray-400 rounded-2xl"
      >
        <Logo/>

        <div className="w-110 mx-auto ">
          <Input className="my-4"
            label="Username"
            value={formik.values.username}
            onValueChange={(value) => formik.setFieldValue("username", value)}
            isInvalid={!!(formik.touched.username && formik.errors.username)}
            errorMessage={formik.errors.username}
            onBlur={() => {
              formik.setFieldTouched("username");
            }}
          />
          <Input
            label="Password"
            type={isShowPassword ? "text" : "password"}
            value={formik.values.password}
            onValueChange={(value) => formik.setFieldValue("password", value)}
            isInvalid={!!(formik.touched.password && formik.errors.password)}
            errorMessage={formik.errors.password}
            onBlur={() => {
              formik.setFieldTouched("password");
            }}
            endContent={
              <Link onPress={() => setIsShowPassword(!isShowPassword)}>
                <EyeIcon />
              </Link>
            }
          />
        </div>

        {/* <Input
          label="Confirm"
          type="password"
          value={formik.values.confirmPassword}
          onValueChange={(value) =>
            formik.setFieldValue("confirmPassword", value)
          }
          errorMessage={formik.errors.confirmPassword}
          onBlur={() => {
            formik.setFieldTouched("confirmPassword");
          }}
          isInvalid={
            !!(formik.touched.confirmPassword && formik.errors.confirmPassword)
          }
        /> */}
        <Button className="w-110 h-10 mx-auto mt-0"
          isLoading={formik.isSubmitting}
          color="primary"
          isDisabled={!formik.isValid}
          onPress={() => formik.submitForm()}
        >
          Send Form
        </Button>

        <Forgot />
        {/* <!-- Divider với chữ Or --> */}
        <div className="w-full max-w-sm mx-auto text-center space-y-4">
          <div className="flex items-center">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        </div>

        <ButtonGoogle />
      </div>
    </div>
  );
}
