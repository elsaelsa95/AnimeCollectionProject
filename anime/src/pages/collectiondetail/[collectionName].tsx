import * as React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import TopBar from '@/components/topbar';
import { Box, Typography } from '@mui/material';
import CardForCollectionDetail from '@/components/cardCollection';

export default function CollectionDetail() {
    const router = useRouter()
    const { collectionName } = router.query

    let [collectionList, setCollectionList] = useState<any[]>([])

    useEffect(() => {
        const value = localStorage.getItem("collectionList")
        if (value) {
            setCollectionList(JSON.parse(value))
        }
    }, [])

    let animeList = []
    const findCollection = collectionList.find((c) => c.collectionName === collectionName)

    if (findCollection) {
        animeList = (findCollection.item)
    }

    return (
        <Box sx={{ background: "black" }}>
            <TopBar />
            <Typography
                fontWeight="bold"
                fontSize="30px"
                color="white"
                sx={{ pl: 2 }}
            >
                Collection Detail : {collectionName}
            </Typography>
            {animeList.map((x: any) => (
                <CardForCollectionDetail
                    key={x}
                    id={x}
                    collectionName={collectionName} />
            ))}
        </Box>
    )
}