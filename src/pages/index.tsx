import Head from "next/head";
import { Posts, User } from "@/types";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { PostComponent } from "@/components/Features/PostComponent";
import { PostListSkeleton } from "@/components/Skeleton";
import { useAxiosGet } from "@/hooks/AxiosHooks";
import { useUserQuery } from "@/hooks/UserQueries";
import { usePostQuery } from "@/hooks/PostQueries";
import { useEffect, useMemo } from "react";
import { userMapStore } from "@/hooks/userMapStore";

export default function Home() {

  // const { data: posts, isLoading } = useAxiosGet<Posts[]>(['posts'], 'https://jsonplaceholder.typicode.com/posts')
  // const { data: users } = useAxiosGet<User[]>(['users'], 'https://jsonplaceholder.typicode.com/users')

  const { data: posts, isLoading } = usePostQuery<Posts[]>();
  const { data: users, error } = useUserQuery<User[]>();

  const { updateUser } = userMapStore();

  const userMap = useMemo(() => new Map(users?.map(user => [user.id, user])), [users]);

  useEffect(() => {

    updateUser(userMap);

  }, [userMap, updateUser])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box maxWidth={'lg'} mx={'auto'} py={4}>
          <Typography variant='h1' fontWeight={500} mb={2} fontSize={32}>Posts</Typography>
          <Grid container spacing={2}>
            {isLoading && [...Array(16)].map((e, index) => <PostListSkeleton key={index} />)}
            {
              users && posts?.map((p) => {
                const user = userMap.get(p.userId);
                return <PostComponent key={p.id} post={p} user={user} />
              })
            }
          </Grid>
        </Box>
      </main>
    </>
  );
}