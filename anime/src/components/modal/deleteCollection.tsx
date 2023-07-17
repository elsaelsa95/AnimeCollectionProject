import * as React from 'react'
import { FormControl, Typography, Button, Grid, Modal } from '@mui/material'
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

interface DetailCollection {
    collectionName: string
    onDelete: () => void
}

export default function DeleteCollection({ collectionName, onDelete }: DetailCollection) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = () => {

        let collectionList = JSON.parse(localStorage.getItem('collectionList'))
        let newCollectionList = collectionList.filter(collectionList => collectionList.collectionName !== collectionName)

        localStorage.setItem("collectionList", JSON.stringify(newCollectionList))
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
                            <Typography> Are you sure to remove `{collectionName}`?</Typography>
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