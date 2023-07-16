import * as React from 'react';
import { Card, CardActions, CardContent, Typography, CardMedia, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { useState, useEffect } from "react";
import DeleteCollection from './modal/deleteCollection';

interface DetailCardProps {
    collectionName: any
}

const GET_ANIME_BY_ID = gql`
    query GetAnimeById ($id: Int) { 
        Media (id: $id, type: ANIME) {
            id
            title {romaji}
            coverImage {large medium color}
        }
    }
`;

export default function CardForCollectionList({ collectionName }: DetailCardProps) {
    const router = useRouter()

    const [collectionList, setCollectionList] = useState<any[]>([])

    useEffect(() => {
        const value = localStorage.getItem("collectionList")
        if (value) {
            setCollectionList(JSON.parse(value))
        }
    }, [])

    let id = ""
    let searchCollectionName = collectionList.find((c) => c.collectionName === collectionName)

    if (searchCollectionName) {
        id = searchCollectionName.item[0]
    }

    const { data } = useQuery(GET_ANIME_BY_ID, {
        variables: {
            id: id
        }
    })

    return (
        <Card sx={{ display: 'flex', width: 470, height: 120, m: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={id ? data.Media.coverImage.medium : "https://www.denkapratama.co.id/assets/default-placeholder-57811f44.png"}
                alt={collectionName}
                onClick={() => router.push(`/collectiondetail/${collectionName}`)}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent onClick={() => router.push(`/collectiondetail/${collectionName}`)}>
                    <Typography fontWeight="bold" fontSize="20px">
                        {collectionName}
                    </Typography>
                </CardContent>
                <CardActions>
                    <DeleteCollection collectionName={collectionName} />
                </CardActions>
            </Box>
        </Card>
    )
}