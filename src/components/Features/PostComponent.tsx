import { Posts, User } from "@/types"
import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material"
import Link from "next/link"

export const PostComponent = ({ post, user }: { post: Posts, user?: User }) => {
    return (
        <Grid item xs={12} md={3} >
            <Card variant="elevation" sx={{ height: '100%', borderRadius: 2 }}>
                {user && <Link href={`/user/${user.id}`}>
                    <CardHeader
                        avatar={
                            <Avatar alt={user?.name}>{user?.name[0]}</Avatar>
                        }
                        title={user.name}
                    />
                </Link>}
                <CardContent>
                    <Link href={`/post/${post.id}`}>
                        <Typography variant="body1" color="text.secondary">
                            {post.title}
                        </Typography>
                    </Link>
                </CardContent>
            </Card>
        </Grid>

    )
}