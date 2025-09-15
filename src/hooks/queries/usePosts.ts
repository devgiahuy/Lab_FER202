// import { QUERY_KEYS } from "@/constants/queryKey"
// import {
//     CreatePostRequest,
//     GetAllPostsResponse,
//     UpdatePostRequest
// } from "@/models/Post/schema/post"
// import { postApi } from "@/services/postApi"
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import toast from "react-hot-toast"

// export const useGetPosts = () => {
//     return useQuery({
//         queryKey: QUERY_KEYS.POSTS,
//         queryFn: async () => {
//             const res = await postApi.getAll()
//             return res
//         },
//         staleTime: 0
//     })
// }

// export const useGetPostById = ({ postId }: { postId: number }) => {
//     return useQuery({
//         queryKey: QUERY_KEYS.POST(postId),
//         queryFn: async () => {
//             const res = await postApi.getById(postId)
//             return res
//         },
//         staleTime: 0
//     })
// }

// export const useCreatePost = ({ onSuccess }: { onSuccess?: () => void } = {}) => {
//     const queryClient = useQueryClient()

//     return useMutation({
//         mutationFn: (newPost: CreatePostRequest) => postApi.create(newPost),
//         onSuccess: (data) => {
//             queryClient.setQueryData<GetAllPostsResponse>(QUERY_KEYS.POSTS, (old) => {
//                 return old ? [...old, data] : [data]
//             })
//             toast.success("Created!")
//             onSuccess?.()
//         },
//         onError: (error) => {
//             toast.error(error?.message || "Failed to create post")
//         }
//     })
// }

// export const useUpdatePost = ({ onSuccess }: { onSuccess?: () => void } = {}) => {
//     const queryClient = useQueryClient()

//     return useMutation({
//         mutationFn: (updatedPost: UpdatePostRequest) => postApi.update(updatedPost),
//         onMutate: async (updatedPost) => {
//             await queryClient.cancelQueries({ queryKey: QUERY_KEYS.POSTS })
//             const previousPosts = queryClient.getQueryData<GetAllPostsResponse>(QUERY_KEYS.POSTS)

//             queryClient.setQueryData<GetAllPostsResponse>(
//                 QUERY_KEYS.POSTS,
//                 (old) =>
//                     old?.map((p) => (p.id === updatedPost.id ? { ...p, ...updatedPost } : p)) ?? []
//             )

//             toast.success("Updated!")
//             onSuccess?.()
//             return { previousPosts }
//         },
//         onError: (_err, _variables, context) => {
//             if (context?.previousPosts) {
//                 queryClient.setQueryData<GetAllPostsResponse>(
//                     QUERY_KEYS.POSTS,
//                     context.previousPosts
//                 )
//             }
//             toast.error("Failed to update post")
//         },
//         onSettled: () => {
//             queryClient.invalidateQueries({ queryKey: QUERY_KEYS.POSTS })
//         }
//     })
// }

// export const useDeletePost = ({ onSuccess }: { onSuccess?: () => void } = {}) => {
//     const queryClient = useQueryClient()

//     return useMutation({
//         mutationFn: (postId: number) => postApi.delete(postId),
//         // before call API
//         onMutate: async (postId: number) => {
//             await queryClient.cancelQueries({ queryKey: QUERY_KEYS.POSTS })
//             const previousPosts = queryClient.getQueryData<GetAllPostsResponse>(QUERY_KEYS.POSTS)

//             queryClient.setQueryData<GetAllPostsResponse>(QUERY_KEYS.POSTS, (old) => {
//                 return old?.filter((p) => p.id !== postId) ?? []
//             })

//             onSuccess?.()
//             toast.success("Deleted!")
//             return { previousPosts }
//         },
//         onError: (_err, _postId, context) => {
//             if (context?.previousPosts) {
//                 queryClient.setQueryData<GetAllPostsResponse>(
//                     QUERY_KEYS.POSTS,
//                     context.previousPosts
//                 ) // rollback
//             }
//             toast.error("Failed to delete post")
//         },
//         // finally
//         onSettled: () => {
//             queryClient.invalidateQueries({ queryKey: QUERY_KEYS.POSTS })
//         }
//     })
// }
