import { useDisclosure } from "@heroui/react"
import { useContext } from "react"
import { DisclosureContext } from "./DisclosureContext"

export const useCreatePostDisclosureCore = () => {
    return useDisclosure()
}

export const useCreatePostDisclosureSingleton = () => {
    const { useCreatePostDisclosure } = useContext(DisclosureContext)!
    return useCreatePostDisclosure
}
