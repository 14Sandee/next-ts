import { Card, CardContent, Skeleton, Stack } from '@mui/material'
import React from 'react'

export const ViewPostSkeleton = () => {
    return (
        <Stack spacing={2}>
            <Card variant="elevation">
                <CardContent>
                    <Stack spacing={2}>
                        <Skeleton variant="rectangular" height={40} />
                        <Skeleton variant="rectangular" height={80} />
                    </Stack>
                </CardContent>
            </Card>
            <Card variant="elevation">
                <CardContent>
                    <Stack direction={'row'} spacing={2}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton width={210} variant="text" sx={{ fontSize: '1rem' }} />
                    </Stack>
                </CardContent>
            </Card>
        </Stack>

    )
}