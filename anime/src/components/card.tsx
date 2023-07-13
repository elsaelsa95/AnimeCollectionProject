import * as React from 'react';
import { Card, CardActions, CardContent, Button, Typography, CardMedia, FormControl, Box, Grid, Rating } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface DetailCardProps {
    id: number
    title: string
    coverImage: string
    bannerImage: string
    description: string
    episodes: number
    genres: string
    averageScore: number
    seasonYear: string | null
}

export default function UniversalCard({ id, title, coverImage, bannerImage, description, episodes, genres, averageScore, seasonYear }: DetailCardProps) {
    const [data, setData] = useState<DetailCardProps>()

    const handleSubmit = () => {
        setData({ id, title, coverImage, bannerImage, description, episodes, genres, averageScore, seasonYear })
        console.log(data, "data")
    }
    const router = useRouter()

    return (
        <FormControl sx={{ p: 2 }}>
            <Card sx={{ display: 'flex', width: 470, height: 300 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 200 }}
                    image={coverImage}
                    alt={title}
                    onClick={() => router.push(`/animedetail/${id}`)}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent onClick={() => router.push(`/animedetail/${id}`)}>
                        <Typography fontWeight="bold" fontSize="20px">
                            {title}
                        </Typography>
                        <Typography fontSize="14px">
                            {description.length <= 100 ? description : (description.substring(0, 100) + "...")}
                        </Typography>
                        <Typography fontSize="14px">
                            Episodes : {episodes}
                        </Typography>
                        <Typography fontSize="14px">
                            Genres : {genres}
                        </Typography>
                        <Typography fontSize="14px">
                            Season Year : {seasonYear}
                        </Typography>
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <Typography fontSize="14px">
                                    Average Score :
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Rating name="half-rating-read" defaultValue={averageScore} precision={0.5} readOnly size="small" />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                        <Button
                            size="small"
                            variant="contained"
                            sx={{ background: 'black' }}
                            onClick={() => handleSubmit()}>Add To Collection</Button>
                    </CardActions>
                </Box>
            </Card>
        </FormControl>
    );
}