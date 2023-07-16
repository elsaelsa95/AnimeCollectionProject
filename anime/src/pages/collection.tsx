import * as React from "react"
import TopBar from "@/components/topbar"
import { Box, Typography, Pagination } from "@mui/material"
import { useState, useEffect } from "react";
import CreateCollection from "@/components/modal/createCollection";
import CardForCollectionList from "@/components/cardCollectionList";

export default function Collection() {
    const [page, setPage] = React.useState(1);
    const dataPerPage = 10
    const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
    };

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
            <CreateCollection onSubmitCollection={() => {
                const value = localStorage.getItem("collectionList")
                if (value) {
                    setCollectionList(JSON.parse(value))
                }
                else {
                    setCollectionList([])
                }
            }} />
            {collectionList.length > 0 ?
                collectionList.slice((page - 1) * dataPerPage, (page - 1) * dataPerPage + dataPerPage).map((x, i) => {
                    return (
                        <CardForCollectionList key={i} collectionName={x.collectionName} />
                    )
                })
                :
                <Typography
                    fontWeight="bold"
                    fontSize="20px"
                    color="white"
                    align="center"
                    m={10}>
                    YOU DONT HAVE ANY COLLECTION
                </Typography>
            }
            <Pagination
                count={Math.ceil(collectionList.length / dataPerPage)}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                sx={{ background: 'white' }}
            />
        </Box>


    )
}