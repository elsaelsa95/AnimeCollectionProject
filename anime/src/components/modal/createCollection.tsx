import * as React from 'react'
import { FormControl, Typography, Button, Grid, Modal, Input } from '@mui/material'
import { useState } from 'react';

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

export default function CreateCollection() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [collectionName, setCollectionName] = useState("")

    let collectionList: any[] = []
    let item: any[] =[]
    const onSubmit = (value: any) => {
        if (localStorage.getItem('collectionList') && localStorage.getItem('collectionList').length > 0) {
            collectionList = JSON.parse(localStorage.getItem('collectionList'))
            localStorage.setItem('collectionList', JSON.stringify([...collectionList, { collectionName, item }]))
        }
        else {
            localStorage.setItem('collectionList', JSON.stringify([...collectionList, { collectionName, item }]))
        }
        handleClose()
    }

    return (
        <>
            <Button
                onClick={handleOpen}
                variant="outlined"
                sx={{ background: 'white', color: "black", m: 2 }}>
                Add New Collection
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <FormControl sx={style}>
                    <Grid>
                        <Grid sx={{ display: "flex", flexDirection: "column", pb: 2 }}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Collection Name
                            </Typography>
                            <Input
                                required
                                id='collectionName'
                                value={collectionName}
                                onChange={(e) => setCollectionName(e.target.value)} />
                        </Grid>
                        <Grid >
                            <Button
                                variant='outlined'
                                color="inherit"
                                onClick={() => onSubmit(collectionName)}
                                sx={{ mr: 2 }}>
                                Submit
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