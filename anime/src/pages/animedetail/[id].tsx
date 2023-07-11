import * as React from 'react'
import { Card, CardContent, Typography, CardMedia, Box, Rating, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { DUMMY_ANIME } from '../../../dummydatabase';
import TopBar from '@/components/topbar';


export default function Detail() {
    const router = useRouter()
    const { id } = router.query
    const anime = DUMMY_ANIME.find((a) => JSON.stringify(a.id) === id)
    if (!anime) {
        return (
            <h1> ANIME NOT FOUND</h1>
        )
    }
    return (
        <Box sx={{ background: "black" }}>
            <TopBar />
            <Box>
                <Card sx={{ p: 2, width: 470, background: "black" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 470, height: 470 }}
                        image={anime.banner}
                        alt={anime.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" color="white" sx={{ pb: 1 }}>
                            {anime.title}
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ pb: 1 }}>
                            {anime.description}
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ pb: 1 }}>
                            Episode : {anime.episode}
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ pb: 1 }}>
                            Genre : {anime.genre}
                        </Typography>
                        <Grid container spacing={0}>
                            <Grid item xs={1.7}>
                                <Typography variant="body2" color="white" sx={{ pb: 1 }}>
                                    Ratings :
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Rating name="half-rating-read" defaultValue={anime.ratings} precision={0.5} size="small" readOnly />
                            </Grid>
                        </Grid>
                        <Typography variant="body2" color="white" sx={{ pb: 1 }}>
                            Collection : {anime.collection}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}