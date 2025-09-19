import { Button } from '@heroui/react'


function ButtonGoogle() {
  return (
    <div className="flex gap-4 items-center
                    ml-36
                    ">
      <Button radius="none">
         <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google"
      className="w-5 h-5"
    />
        Đăng nhập bằng Google</Button>
    </div>
  )
}

export default ButtonGoogle