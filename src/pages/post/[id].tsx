import { Posts, User } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import { Avatar, Box, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const ViewPage = () => {
    const router = useRouter();
    const id = router.query.id;

    const { data: post, isLoading, error } = useQuery<Posts>({
        queryKey: ['post', id],
        queryFn: () => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.data),
        enabled: !!id
    })

    return (
        <>
            {isLoading && <p>loading...</p>}
            <Box>
                <Stack maxWidth={300} mx={'auto'} spacing={2}>
                    {post && <Card variant="elevation">
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
    const { data: user } = useQuery<User>({
        queryKey: ['users', id],
        queryFn: () => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.data),
    })
    return (
        <Card variant='elevation'>
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