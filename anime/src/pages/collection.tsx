import * as React from "react"
import TopBar from "@/components/topbar"
import { Box, Card, CardMedia, CardContent, Typography, Button } from "@mui/material"
import { useState, useEffect } from "react";
import CreateCollection from "@/components/modal/createCollection";
import DeleteCollection from "@/components/modal/deleteCollection";
import { useRouter } from "next/router";

export default function Collection() {
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

    // console.log(collectionList)

    const router = useRouter()

    return (
        <Box sx={{ background: "black", minHeight: "1000px" }}>
            <TopBar />
            <Typography
                fontWeight="bold"
                fontSize="30px"
                color="white"
                sx={{ pl: 2 }}
            >
                Collection List
            </Typography>
            <CreateCollection />
            {collectionList.length > 0 ?
                collectionList.map((x, i) => {
                    return (
                        <Card sx={{ display: 'flex', width: 470, height: 120, m: 2 }} key={i}>
                            <CardMedia
                                component="img"
                                sx={{ width: 150 }}
                                image="https://www.denkapratama.co.id/assets/default-placeholder-57811f44.png"
                                alt={x.collectionName}
                                onClick={() => router.push(`/collectiondetail/${x.collectionName}`)}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent onClick={() => router.push(`/collectiondetail/${x.collectionName}`)}>
                                    <Typography fontWeight="bold" fontSize="20px">
                                        {x.collectionName}
                                    </Typography>
                                </CardContent>
                                <Button>
                                    <DeleteCollection collectionName={x.collectionName} />
                                </Button>
                            </Box>

                        </Card>
                    )
                })
                :
                <Typography
                    fontWeight="bold"
                    fontSize="20px"
                    align="center"
                    m={10}>
                    YOU DONT HAVE ANY COLLECTION
                </Typography>
            }
        </Box>


    )
}