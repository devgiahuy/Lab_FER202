export const QUERY_KEYS = {
    POSTS: ["posts"] as const,
    POST: (id: number) => ["post", id] as const
}

