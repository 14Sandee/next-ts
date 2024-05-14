import { Posts } from '@/types';
import { useRouter } from 'next/router';
import React from 'react'
import { Avatar, Box, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { ViewPostSkeleton } from '@/components/Skeleton';
import { usePostQuery } from '@/hooks/PostQueries';
import { userMapStore } from '@/hooks/userMapStore';

const ViewPage = () => {

    const router = useRouter();
    const id = router.query.id ? Number(router.query.id) : undefined;
    const { data: post, isLoading } = usePostQuery<Posts>(id);

    return (
        <>
            <Box py={4}>
                <Stack maxWidth={300} mx={'auto'} spacing={2}>
                    {isLoading && <ViewPostSkeleton />}
                    {post && <Card sx={{ borderRadius: 2 }} variant="elevation">
                        <CardContent>
                            <Stack spacing={2}>
                                <Typography variant="body1" color="text.primary">
                                    {post.title}
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    {post.body}
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                    }
                    {
                        post && <UserCard id={post.userId} />
                    }
                </Stack>
            </Box>
        </>
    )
}

export default ViewPage

export const UserCard = ({ id }: { id: number }) => {
    const { user: data } = userMapStore();
    let user = data?.get(id)
    return (
        <Card variant='elevation' sx={{ borderRadius: 2 }}>
            {user && <Link href={`/user/${user.id}`}>
                <CardHeader
                    avatar={
                        <Avatar alt={user?.name}>{user?.name[0]}</Avatar>
                    }
                    title={user.name}
                />
            </Link>}
        </Card>
    )
}