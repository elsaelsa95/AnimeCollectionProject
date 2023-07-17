import * as React from 'react'
import { FormControl, Typography, Button, Grid, Modal } from '@mui/material'
import { useState, useEffect } from 'react';

const style = {
    position: 'static',
    top: '50%',
    left: '50%',
    transform: 'translate(50%, 100%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface DetailCollection {
    id: string
    collectionName: string
    animeName: string
    onDelete:() =>void
}

export default function DeleteFromCollection({ id, collectionName, animeName, onDelete }: DetailCollection) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let [collectionList, setCollectionList] = useState<any[]>([])

    useEffect(() => {
        const value = localStorage.getItem("collectionList")
        if (value) {
            setCollectionList(JSON.parse(value))
        }
        else {
            setCollectionList([])
        }
    }, [])

    const onSubmit = () => {

        const findCollection = collectionList.find((c) => c.collectionName === collectionName)

        if (findCollection) {
            for (let i = 0; i < findCollection.item.length; i++) {
                if (findCollection.item[i] === id) {
                    findCollection.item.splice(i, 1)
                }
            }
        }

        let newCollectionList = collectionList.splice(collectionList.indexOf(collectionName), findCollection)

        localStorage.setItem("collectionList", JSON.stringify(collectionList))
        onDelete()
        handleClose()
    }

    return (
        <>
            <Button onClick={handleOpen} variant="contained" sx={{ background: 'black', ml: 2 }}>Remove Collection</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <FormControl sx={style}>
                    <Grid>
                        <Grid sx={{ display: "flex", flexDirection: "column", pb: 2 }}>
                            <Typography> Are you sure to remove `{animeName}` from `{collectionName}`?</Typography>
                        </Grid>
                        <Grid >
                            <Button
                                variant='outlined'
                                color="inherit"
                                onClick={() => onSubmit()}
                                sx={{ mr: 2 }}>
                                Remove
                            </Button>
                            <Button
                                variant='outlined'
                                color="inherit"
                                onClick={() => handleClose()}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </FormControl>
            </Modal>
        </>
    )
}