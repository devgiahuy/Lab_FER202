import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { useEffect, useRef, useState } from "react";
import { useNavbarScroll } from "../../hooks/useNavbarScroll";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

function NavbarDemo() {
  // type handleNavbar = "default" | "top" | "middle";
  // const [scrollState, setScroledState] = useState<handleNavbar>("default");
  // const [handleHiddenNavbar, sethandleHiddenNavbar] = useState(false);
  // // const timeoutRef = useRef<number | null>(null);
  // // const { direction } = useScrollDirection(20);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const y = window.scrollY;
  //     if (y >= 0 && y <= 10) {
  //       setScroledState("default");
  //       sethandleHiddenNavbar(false);
  //     } else if (y > 10 && y <= 500) {
  //       setScroledState("top");
  //       sethandleHiddenNavbar(false);
  //     } else {
  //       setScroledState("middle");
  //       sethandleHiddenNavbar(true);

        
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

type HandleNavbar = "default" | "top" | "middle";
  const [scrollState, setScrollState] = useState<HandleNavbar>("default");
  const [handleHiddenNavbar, setHandleHiddenNavbar] = useState(false);

  // ref để debounce scroll event
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // clear timeout cũ để tránh race-condition
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // delay nhỏ để tránh giật animation
      timeoutRef.current = window.setTimeout(() => {
        if (y <= 10) {
          setScrollState("default");
          setHandleHiddenNavbar(false);
        } else if (y > 10 && y <= 400) {
          setScrollState("top");
          setHandleHiddenNavbar(false);
        } else {
          setScrollState("middle");
          setHandleHiddenNavbar(true);
        }
      }, 100); // bạn có thể tăng/giảm 50–150ms để thử cho mượt hơn
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);


  // const { scrollState, hidden, direction } = useNavbarScroll(20);

  const baseClasses = ` 
                    bg-red-900 transition-all duration-500 ease-in-out
                      fixed top-0 left-0 w-full z-50
                      mx-auto max-w-7xl
                    ${
                      scrollState === "top"
                        ? "bg-yellow-900 h-15 justify-between mx-auto max-w-3xl scale-95 "
                        : scrollState === "middle"
                        ? "bg-yellow-900 h-15 justify-between mx-auto max-w-3xl scale-95"
                        : "max-w-7xl scale-100 "
                    }
                      `;

  const itemClasses = [
    "flex",
    "relative",
    "h-full",
    "items-center",
    "data-[active=true]:after:content-['']",
    "data-[active=true]:after:absolute",
    "data-[active=true]:after:bottom-0",
    "data-[active=true]:after:left-0",
    "data-[active=true]:after:right-0",
    "data-[active=true]:after:h-[2px]",
    "data-[active=true]:after:rounded-[2px]",
    "data-[active=true]:after:bg-primary",
  ];

  return (
    <div className="duration-200">
      <Navbar
        shouldHideOnScroll={handleHiddenNavbar}
        classNames={{
          base: [baseClasses],
          item: [
            // dấu gạch chân dưới mục được chọn
            itemClasses,
            //
          ],
          brand: [],
        }}
      >
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" href="#" color="foreground">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="solid">
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="bordered">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
export default NavbarDemo;
