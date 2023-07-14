import * as React from 'react';
import { Card, CardActions, CardContent, Button, Typography, CardMedia, FormControl, Box, Grid, Rating } from '@mui/material';
import { useRouter } from 'next/router';
import AddToCollection from './modal/addToCollection';

import { gql, useQuery } from '@apollo/client';

interface DetailCardProps {
    id: string
}

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

export default function CardForCollectionDetail({ id }: DetailCardProps) {
    const router = useRouter()

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

    return (
        <FormControl sx={{ p: 2 }}>
            <Card sx={{ display: 'flex', width: 490, height: 350 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 200 }}
                    image={data.Media.coverImage.medium}
                    alt={data.Media.title.romaji}
                    onClick={() => router.push(`/animedetail/${id}`)}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent onClick={() => router.push(`/animedetail/${id}`)}>
                        <Typography fontWeight="bold" fontSize="20px">
                            {data.Media.title.romaji}
                        </Typography>
                        <Typography fontSize="14px">
                            {data.Media.description.length <= 100 ? data.Media.description : (data.Media.description.substring(0, 100) + "...")}
                        </Typography>
                        <Typography fontSize="14px">
                            Episodes : {data.Media.episodes}
                        </Typography>
                        <Typography fontSize="14px">
                            Genres : {data.Media.genres}
                        </Typography>
                        <Typography fontSize="14px">
                            Season Year : {data.Media.seasonYear}
                        </Typography>
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <Typography fontSize="14px">
                                    Average Score :
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Rating name="half-rating-read" defaultValue={data.Media.averageScore} precision={0.5} readOnly size="small" />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                        <Button>
                            <AddToCollection id={id} title={data.Media.title.romaji} />
                        </Button>
                        <Button>
                            Delete From Collection
                        </Button>
                    </CardActions>
                </Box>
            </Card>
        </FormControl>
    );
}