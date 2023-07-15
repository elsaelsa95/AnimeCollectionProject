import * as React from 'react'
import TopBar from '@/components/topbar';
import { Box, Pagination, Typography } from '@mui/material';
import UniversalCard from '@/components/card';
import { gql, useQuery } from '@apollo/client';

const GET_ANIME_LIST = gql`
    query GetAnimeList {
        Page
        {
          media
          {	
            id
            title {romaji}
            coverImage {medium}
            bannerImage
            description
            episodes
            genres
            averageScore
            seasonYear
          }
        }
      }
`

export default function AnimeList() {
    const [page, setPage] = React.useState(1);
    const dataPerPage = 10
    const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
    };

    const { loading, error, data } = useQuery(GET_ANIME_LIST)
    if (loading) {
        return (
            <h1> Loading...</h1>
        )
    }
    if (error) {
        return (
            <h1>Oopss, something when wrong</h1>
        )
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
                Anime List
            </Typography>

            {data?.Page.media.slice((page - 1) * dataPerPage, (page - 1) * dataPerPage + dataPerPage).map((x: any) => (
                <UniversalCard
                    key={x.id}
                    id={x.id}
                    title={x.title.romaji}
                    coverImage={x.coverImage.medium}
                    bannerImage={x.bannerImage}
                    description={x.description}
                    episodes={x.episodes}
                    genres={x.genres}
                    averageScore={x.averageScore}
                    seasonYear={x.seasonYear}
                />
            ))}
            <Pagination
                count={Math.ceil(data.Page.media.length / dataPerPage)}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                sx={{ background: 'white' }}
            />
        </Box>
    )
}