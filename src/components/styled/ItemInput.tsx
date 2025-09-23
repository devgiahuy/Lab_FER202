import { Input } from "@heroui/react";

function ItemInput() {
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
      </div>
    </>
  );
}

export default ItemInput;
