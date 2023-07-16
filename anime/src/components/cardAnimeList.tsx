import * as React from 'react';
import { Card, CardActions, CardContent, Typography, CardMedia, FormControl, Box, Grid, Rating } from '@mui/material';
import { useRouter } from 'next/router';
import AddToCollection from './modal/addToCollection';
import { useState, useEffect } from "react";
import Link from 'next/link';

interface DetailCardProps {
    id: string
    title: string
    coverImage: string
    bannerImage: string
    description: string
    episodes: number
    genres: string
    averageScore: number
    seasonYear: string | null
}

export default function CardAnimeList({ id, title, coverImage, bannerImage, description, episodes, genres, averageScore, seasonYear }: DetailCardProps) {
    const router = useRouter()

    const [collectionList, setCollectionList] = useState<any[]>([])

    useEffect(() => {
        const value = localStorage.getItem("collectionList")
        if (value) {
            setCollectionList(JSON.parse(value))
        }
        else {
            setCollectionList([])
        }
    }, [])

    let searchCollectionName = []
    for (let i = 0; i < collectionList.length; i++) {
        for (let j = 0; j < collectionList[i].item.length; j++) {
            if (collectionList[i].item[j] == id) {
                searchCollectionName.push(collectionList[i].collectionName)
            }
        }
    }

    return (
        <FormControl sx={{ p: 2 }}>
            <Card sx={{ display: 'flex', width: 490, minHeight: 250 }}>
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
                            <Grid item xs={2}>
                                <Typography fontSize="14px">
                                    Ratings :
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Rating name="half-rating-read" defaultValue={averageScore / 20} precision={0.5} readOnly size="small" />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Typography fontSize="14px" sx={{ pl: 2, mt: -2 }}>
                        Collection : {searchCollectionName.map((x: any, i: any) => (
                            <Link key={i} href={`/collectiondetail/${x}`}> {x} ,</Link>
                        ))}
                    </Typography>
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                        <AddToCollection id={JSON.stringify(id)} title={title} onChoose={() => {
                            const value = localStorage.getItem("collectionList")
                            if (value) {
                                setCollectionList(JSON.parse(value))
                            }
                            else {
                                setCollectionList([])
                            }
                        }} />
                    </CardActions>
                </Box>
            </Card>
        </FormControl>
    );
}