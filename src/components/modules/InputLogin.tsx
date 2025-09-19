import { Input } from "@heroui/react";

function InputLogin() {
  return (
    <>
      {/* Email */}
      <div className="ml-8 w-109 h-8">
        <Input
          isRequired
          isClearable
          errorMessage="Please enter a valid Email"
          label="Email"
          type="email"
          variant="underlined"
          onClear={() => console.log("input cleared")}
          classNames={{
            label: "after:content-none", // 🚀 Tailwind trick để xóa dấu *
          }}
        />

        {/* Password */}
        <Input
          isRequired
          errorMessage="Please enter a valid password"
          label="Password"
          type="text"
          variant="underlined"
          classNames={{
            label: "after:content-none", // 🚀 Tailwind trick để xóa dấu *
          }}
        />
      </div>
    </>
  );
}

export default InputLogin;
