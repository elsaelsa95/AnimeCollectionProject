import * as React from 'react';
import { Card, CardActions, CardContent, Typography, CardMedia, FormControl, Box, Grid, Rating } from '@mui/material';
import { useRouter } from 'next/router';
import AddToCollection from './modal/addToCollection';
import { gql, useQuery } from '@apollo/client';
import DeleteFromCollection from './modal/removeFromCollection';
import { useState, useEffect } from "react";
import Link from 'next/link';

interface DetailCardProps {
    id: string
    collectionName: any
    onRefresh: () => void
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

export default function CardForCollectionDetail({ id, collectionName, onRefresh}: DetailCardProps) {
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
                            <Grid item xs={3}>
                                <Typography fontSize="14px">
                                    Ratings :
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Rating name="half-rating-read" defaultValue={data.Media.averageScore / 20} precision={0.5} readOnly size="small" />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Typography fontSize="14px" sx={{ pl: 2, mt: -2 }} >
                        Collection : {searchCollectionName.map((x: any, i: any) => (
                            <Link key={i} href={`/collectiondetail/${x}`} onClick={()=>onRefresh()}> {x} ,</Link>
                        ))}
                    </Typography>
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                        <AddToCollection
                            id={id}
                            title={data.Media.title.romaji}
                            onChoose={() => {
                                const value = localStorage.getItem("collectionList")
                                if (value) {
                                    setCollectionList(JSON.parse(value))
                                }
                                else {
                                    setCollectionList([])
                                }
                            }} />
                        <DeleteFromCollection
                            id={id}
                            collectionName={collectionName}
                            animeName={data.Media.title.romaji}
                            onDelete={() => {
                                const value = localStorage.getItem("collectionList")
                                if (value) {
                                    if(value)
                                    setCollectionList(JSON.parse(value))
                                    onRefresh()
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