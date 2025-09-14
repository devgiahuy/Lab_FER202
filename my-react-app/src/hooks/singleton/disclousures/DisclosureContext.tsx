import { createContext } from "react"

export interface DisclosureContextType {
    useCreatePostDisclosure: ReturnType<typeof useCreatePostDisclosureCore>


}

export const DisclosureContext = createContext<DisclosureContextType | null>(null)