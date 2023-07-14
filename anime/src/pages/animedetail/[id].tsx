import * as React from 'react'
import { Card, CardContent, Typography, CardMedia, Box, Rating, Grid, CardActions, Button } from '@mui/material';
import { useRouter } from 'next/router';
import TopBar from '@/components/topbar';
import { gql, useQuery } from '@apollo/client';
import AddToCollection from '@/components/modal/addToCollection';

const GET_ANIME_BY_ID = gql`
    query GetAnimeById ($id: Int) { 
        Media (id: $id, type: ANIME) {
            id
            title {romaji}
            coverImage {large medium color}
            bannerImage
            description
            episodes
            genres
            averageScore
            seasonYear
        }
    }
`;

export default function AnimeDetail() {
    const router = useRouter()
    const { id } = router.query

    const { loading, error, data } = useQuery(GET_ANIME_BY_ID, {
        variables: {
            id: id
        }
    })

    if (loading) {
        return (
            <h1> Loading...</h1>
        )
    }
    if (error) {
        return (
            <h1>Oopss, something when wrong</h1>
        )
    }
    // console.log(data)

    return (
        <Box sx={{ background: "black" }}>
            <TopBar />
            <Box>
                <Card sx={{ p: 2, width: 470, background: "black" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 470, height: 470 }}
                        image={data.Media.bannerImage}
                        alt={data.Media.title.romaji}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" color="white" sx={{ pb: 1 }}>
                            {data.Media.title.romaji}
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ pb: 1 }}>
                            {data.Media.description}
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ pb: 1 }}>
                            Episodes : {data.Media.episodes}
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ pb: 1 }}>
                            Genres : {data.Media.genres}
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ pb: 1 }}>
                            Season Year : {data.Media.seasonYear}
                        </Typography>
                        <Grid container spacing={0}>
                            <Grid item xs={3}>
                                <Typography variant="body2" color="white" sx={{ pb: 1 }}>
                                    Average Score :
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Rating name="half-rating-read" defaultValue={data.Media.averageScore} precision={0.5} size="small" readOnly />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                        <AddToCollection id={id} title={data.Media.title.romaji} />
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}