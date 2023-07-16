import * as React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import TopBar from '@/components/topbar';
import { Box, Pagination, Typography } from '@mui/material';
import CardForCollectionDetail from '@/components/cardCollectionDetail';

export default function CollectionDetail() {
    const [page, setPage] = React.useState(1);
    const dataPerPage = 10
    const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
    };

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
            {animeList.length > 0 ?
                animeList.slice((page - 1) * dataPerPage, (page - 1) * dataPerPage + dataPerPage).map((x: any) => (
                    <CardForCollectionDetail
                        key={x}
                        id={x}
                        collectionName={collectionName} />
                )) :
                <Typography
                    color='white'
                    fontWeight="bold"
                    fontSize="20px"
                    align="center"
                    m={10}>
                    YOU DONT HAVE ANY COLLECTION
                </Typography>
            }
            <Pagination
                count={Math.ceil(animeList.length / dataPerPage)}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                sx={{ background: 'white' }}
            />
        </Box>
    )
}