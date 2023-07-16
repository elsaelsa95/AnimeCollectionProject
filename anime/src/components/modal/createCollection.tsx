import * as React from 'react'
import { Typography, Button, Grid, Modal, Card, TextField } from '@mui/material'
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

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

const schema = yup
    .object({
        collectionName: yup.string().required("*Collection Name is Required").matches(/^[a-zA-Z0-9]*$/, "*Special Character is Not Allowed")
    })
    .required()

export default function CreateCollection({onSubmitCollection}:{onSubmitCollection:()=> void}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {
        register,
        formState: { errors },
        handleSubmit } = useForm({
            resolver: yupResolver(schema),
        })

    const onSubmit = (data: any) => {
        const collectionName = data.collectionName

        let collectionList: any[] = []
        let item: any[] = []

        if (localStorage.getItem('collectionList') && localStorage.getItem('collectionList').length > 0) {
            collectionList = JSON.parse(localStorage.getItem('collectionList'))
            localStorage.setItem('collectionList', JSON.stringify([...collectionList, { collectionName, item }]))
        }
        else {
            localStorage.setItem('collectionList', JSON.stringify([...collectionList, { collectionName, item }]))
        }
        onSubmitCollection()
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
                <Card sx={{
                    position: 'static',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(50%, 100%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <form onSubmit={handleSubmit((onSubmit))}>
                        <Grid>
                            <Grid sx={{ display: "flex", flexDirection: "column", pb: 2 }}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Collection Name
                                </Typography>
                                <br></br>
                                <TextField {...register("collectionName")} />
                            </Grid>
                            <Grid >
                                <Typography fontSize="12px" color="red">
                                    {errors.collectionName?.message}
                                </Typography>
                                <Button
                                    variant='outlined'
                                    color="inherit"
                                    sx={{ mr: 2 }}
                                    type="submit">
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
                    </form>
                </Card>
            </Modal>
        </>
    )
}