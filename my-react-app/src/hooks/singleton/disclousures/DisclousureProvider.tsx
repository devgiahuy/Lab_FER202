
import type { PropsWithChildren } from "react"
import { DisclosureContext } from "./DisclosureContext"


export const DisclosureProvider = ({ children }: PropsWithChildren) => {
    // const useCreatePostDisclosure = useCreatePostDisclosureCore()

    return (
        <DisclosureContext.Provider value={}>

        {children}

        </DisclosureContext.Provider>
    )
}