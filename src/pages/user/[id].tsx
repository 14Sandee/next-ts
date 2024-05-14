import { userMapStore } from '@/hooks/userMapStore';
import { Avatar, Box, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'

const ViewUser = () => {
    const router = useRouter();
    const id = router.query.id;
    const { user: data } = userMapStore();
    let user = data?.get(Number(id))

    return (
        <>
            <Box py={4}>
                <Stack maxWidth={300} mx={'auto'} spacing={2}>
                    {/* {isLoading && <UserSkeleton />} */}
                    {user && <Card sx={{ borderRadius: 2 }} variant="elevation">
                        <CardHeader
                            avatar={
                                <Avatar alt={user?.name}>{user?.name[0]}</Avatar>
                            }
                            title={user.name}
                            subheader={user.username}
                        />
                        <CardContent>
                            <Stack spacing={2}>
                                <Stack spacing={1}>
                                    <Typography variant='subtitle1' color='text.secondary' fontSize={12} textTransform={'uppercase'}>Personal Details</Typography>
                                    <Stack spacing={1}>
                                        <Typography variant="body2" color="text.primary">
                                            {user.email}
                                        </Typography>
                                        <Typography variant="body2" color="text.primary">
                                            {user.phone}
                                        </Typography>
                                        <a href={`https://${user.website}`} >
                                            <Typography variant="body2" color="text.primary">
                                                {user.website}
                                            </Typography>
                                        </a>
                                    </Stack>
                                </Stack>
                                <Stack spacing={1}>
                                    <Typography variant='subtitle1' color='text.secondary' fontSize={12} textTransform={'uppercase'}>Address</Typography>
                                    <Typography variant="body2" color="text.primary">
                                        {user.address.street + ', ' + user.address.city + ', ' + user.address.zipcode}
                                    </Typography>
                                </Stack>
                                <Stack spacing={1}>
                                    <Typography variant='subtitle1' color='text.secondary' fontSize={12} textTransform={'uppercase'}>Company</Typography>
                                    <Typography variant='body2' color='text.primary'>
                                        {user.company.name}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>}
                </Stack>
            </Box>
        </>

    )
}

export default ViewUser;