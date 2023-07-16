import * as React from 'react'
import { Card, CardContent, Typography, CardMedia, Box, Rating, Grid, CardActions } from '@mui/material';
import { useRouter } from 'next/router';
import TopBar from '@/components/topbar';
import { gql, useQuery } from '@apollo/client';
import AddToCollection from '@/components/modal/addToCollection';
import { useState, useEffect } from "react";
import Link from 'next/link';

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
                            <Grid item xs={2}>
                                <Typography variant="body2" color="white" sx={{ pb: 1 }}>
                                    Ratings :
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Rating name="half-rating-read" defaultValue={data.Media.averageScore / 20} precision={0.5} size="small" readOnly />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Typography fontSize="14px" sx={{ pl: 2, mt: -2 }} color="white">
                        Collection : {searchCollectionName.map((x: any, i: any) => (
                            <Link key={i} href={`/collectiondetail/${x}`} style={{ color: 'white' }}> {x} ,</Link>
                        ))}
                    </Typography>
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                        <AddToCollection id={id} title={data.Media.title.romaji} />
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}