import { Posts, User } from "@/types"
import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material"
import Link from "next/link"

export const PostComponent = ({ post, user }: { post: Posts, user?: User }) => {
    return (
        <Card variant="elevation">
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
    )
}