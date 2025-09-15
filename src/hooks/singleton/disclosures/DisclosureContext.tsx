import { createContext } from "react"
import { useCreatePostDisclosureCore } from "./useCreatePostDisclosure"

export interface DisclosureContextType {
    useCreatePostDisclosure: ReturnType<typeof useCreatePostDisclosureCore>
}

export const DisclosureContext = createContext<DisclosureContextType | null>(null)
