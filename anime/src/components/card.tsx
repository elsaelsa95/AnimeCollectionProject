import * as React from 'react';
import { Card, CardActions, CardContent, Button, Typography, CardMedia, FormControl, Box, Grid, Rating } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface DetailCardProps {
    id: number
    title: string
    cover: string
    banner: string
    description: string
    episode: number
    genre: string
    ratings: number
    collection: string | null
}

export default function UniversalCard({ id, title, cover, banner, description, episode, genre, ratings, collection }: DetailCardProps) {
    const [data, setData] = useState<DetailCardProps>()

    const handleSubmit = () => {
        setData({ id, title, cover, banner, description, episode, genre, ratings, collection })
        console.log(data, "data")
    }
    const router = useRouter()

    return (
        <FormControl sx={{ p: 2 }}>
            <Card sx={{ display: 'flex', width: 470, height: 250 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 200 }}
                    image={cover}
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
                            Episode : {episode}
                        </Typography>
                        <Typography fontSize="14px">
                            Genre : {genre}
                        </Typography>
                        <Grid container spacing={0}>
                            <Grid item xs={3}>
                                <Typography fontSize="14px">
                                    Ratings :
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Rating name="half-rating-read" defaultValue={ratings} precision={0.5} readOnly size="small" />
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