import * as React from 'react'
import { FormControl, Typography, Button, Grid, Modal, Card, CardMedia, Box, CardContent, Pagination } from '@mui/material'
import { useEffect, useState } from 'react';
import CreateCollection from './createCollection';

const style = {
    position: 'static',
    top: '50%',
    left: '50%',
    transform: 'translate(15%,15%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface idAnime {
    id: any
    title: string
}

export default function AddToCollection({ id, title }: idAnime) {
    const [page, setPage] = React.useState(1);
    const dataPerPage = 5
    const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let [collectionList, setCollectionList] = useState<any[]>([])

    useEffect(() => {
        const value = localStorage.getItem("collectionList")
        if (value) {
            setCollectionList(JSON.parse(value))
        }
    }, [])

    const onSubmit = (id: any, collectionName: any) => {
        const findCollection = collectionList.find((c) => c.collectionName === collectionName)

        if (findCollection) {
            findCollection.item.push(id)

            let newCollectionList = collectionList.splice(collectionList.indexOf(collectionName), findCollection)

            localStorage.setItem('collectionList', JSON.stringify(collectionList))
        }

        handleClose()
    }

    return (
        <>
            <Button onClick={handleOpen} variant="outlined" sx={{ background: 'white' }}>Add To Collection</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <FormControl sx={style}>
                    <Grid>
                        <Grid sx={{ display: "flex", flexDirection: "column", pb: 2, pl: 2 }}>
                            <Typography> Add `{title}` into collection: </Typography>
                        </Grid>
                        {collectionList.length > 0 ?
                            collectionList.slice((page - 1) * dataPerPage, (page - 1) * dataPerPage + dataPerPage).map((x, i) => {
                                return (
                                    <Card sx={{ display: 'flex', width: 300, height: 100, m: 2 }} key={i}
                                        onClick={() => onSubmit(id, x.collectionName)}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 100 }}
                                            image="https://www.denkapratama.co.id/assets/default-placeholder-57811f44.png"
                                            alt={x.collectionName}
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent>
                                                <Typography fontWeight="bold" fontSize="20px">
                                                    {x.collectionName}
                                                </Typography>
                                            </CardContent>
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
                        <CreateCollection />
                        <Button
                            variant='outlined'
                            color="inherit"
                            onClick={() => handleClose()}>
                            Cancel
                        </Button>
                    </Grid>
                    <Pagination
                        count={Math.ceil(collectionList.length / dataPerPage)}
                        page={page}
                        onChange={handleChangePage}
                        variant="outlined"
                        sx={{ background: 'white' }}
                    />
                </FormControl>
            </Modal>
        </>
    )
}