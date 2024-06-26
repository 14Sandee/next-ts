import { Card, CardContent, Skeleton, Stack } from '@mui/material'
import React from 'react'

export const UserSkeleton = () => {
    return (
        <Card variant="elevation">
            <CardContent>
                <Stack spacing={4}>
                    <Stack direction={'row'} spacing={2}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton width={210} variant="text" sx={{ fontSize: '1rem' }} />
                    </Stack>
                    <Stack spacing={1}>
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} height={20} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} height={20} />
                    </Stack>
                    <Stack spacing={1}>
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} height={20} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} height={20} />
                    </Stack>
                    <Stack spacing={1}>
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} height={20} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} height={20} />
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}
