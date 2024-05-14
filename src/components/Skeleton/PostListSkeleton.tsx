import { Card, CardContent, Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'

export const PostListSkeleton = () => {
    return (
        <Grid item xs={3}>
            <Card variant="elevation" sx={{ height: '100%', borderRadius: 2 }}>
                <CardContent>
                    <Stack spacing={4}>
                        <Stack direction={'row'} spacing={2}>
                            <Skeleton variant="circular" width={40} height={40} />
                            <Skeleton width={210} variant="text" sx={{ fontSize: '1rem' }} />
                        </Stack>
                        <Stack spacing={2}>
                            <Skeleton variant="rectangular" height={80} />
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    )
}