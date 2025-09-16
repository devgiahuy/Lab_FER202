import { Form, Link } from "@heroui/react";
import React from "react";
import Logo from "../../styled/Logo";
import InputLogin from "../../modules/InputLogin";
import Forgot from "../../modules/Forgot";
import ButtomSubmit from "../../styled/ButtomSubmit";
import ButtonGoogle from "../../styled/ButtonGoogle";

export default function LoginDemo() {
  const [action, setAction] = React.useState(null);

  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <div className="flex justify-center mt-50">
      <Form
        className="w-125 h-131 max-w-4xs flex flex-col gap-4
                  bg-gray-400 rounded-2xl"
        onReset={() => setAction("reset")}
        onSubmit={(e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.currentTarget));

          setAction(`submit ${JSON.stringify(data)}`);
        }}
      >
        <Logo />
        <InputLogin />
        <Forgot />
        <ButtomSubmit />

        {/* <!-- Divider với chữ Or --> */}
        <div className="w-full max-w-sm mx-auto text-center space-y-4">
          <div className="flex items-center">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        </div>

        <ButtonGoogle/>

        <div className="ml-44">
          <span>No account?</span>
          <Link>Sign Up</Link>
        </div>
        {/* {action && <div className="text-small text-default-500"></div>} */}
      </Form>
    </div>
  );
}
