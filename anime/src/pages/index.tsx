import * as React from 'react'
import TopBar from '@/components/topbar';
import { Box, Typography } from '@mui/material';
import { DUMMY_ANIME } from '../../dummydatabase';
import UniversalCard from '@/components/card';

export default function AnimeList() {
    return (
        <Box sx={{ background: "black" }}>
            <TopBar />
            <Typography
                fontWeight="bold"
                fontSize="30px"
                color="white"
                sx={{ pl: 2 }}
            >
                Anime List
            </Typography>
            {DUMMY_ANIME?.map((x, i) => (
                <UniversalCard
                    key={i}
                    id={x.id}
                    title={x.title}
                    cover={x.cover}
                    banner={x.banner}
                    description={x.description}
                    episode={x.episode}
                    genre={x.genre}
                    ratings={x.ratings}
                    collection={x.collection}
                />
            ))}
        </Box>
    )
}