import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@heroui/react"
import { useEffect, useState } from "react"

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
    )
}

export function NavbarDemo() {
    type NavbarState = "default" | "top" | "middle"
    const [scrollState, setScroledState] = useState<NavbarState>("default")
    const [isHiddenNavbar, setIsHiddenNavbar] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY
            let nextScrollState: NavbarState
            // let nextHidden: boolean

            if (y >= 0 && y < 10) {
                nextScrollState = "default"
                // nextHidden = false
            } else if (y >= 10 && y < 600) {
                nextScrollState = "top"
                // nextHidden = false
            } else {
                nextScrollState = "middle"
                // nextHidden = true
            }

            setScroledState((prev) =>
                prev === nextScrollState ? prev : nextScrollState
            )
            // setIsHiddenNavbar((prev) =>
            //     prev === nextHidden ? prev : nextHidden
            // )

            if (y < 600) {
                setIsHiddenNavbar(false)
            } else {
                if (y > lastScrollY) {
                    // scroll xuống
                    setIsHiddenNavbar(true)
                } else {
                    // scroll lên
                    setIsHiddenNavbar(false)
                }
            }
            setLastScrollY(y)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    const baseClasses = `
        transition-all duration-300 ease-in-out
        bg-red-900 mt-3
        fixed left-0 w-full z-50
        mx-auto max-w-7xl
        data-[visible=false]:mt-3
        ${
            isHiddenNavbar
                ? "-translate-y-full opacity-0"
                : "translate-y-0 opacity-100"
        }
        ${
            scrollState === "top" || scrollState === "middle"
                ? "rounded-3xl bg-yellow-900 justify-between mx-auto max-w-3xl scale-95"
                : "max-w-7xl scale-100"
        }
    `

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
    ]

    return (
        <div>
            <Navbar
                data-visible={!isHiddenNavbar}
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
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
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
                        <Button
                            as={Link}
                            color="primary"
                            href="#"
                            variant="solid"
                        >
                            Login
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            as={Link}
                            color="primary"
                            href="#"
                            variant="bordered"
                        >
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    )
}
