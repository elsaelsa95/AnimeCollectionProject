import * as React from 'react'
import TopBar from '@/components/topbar';
import { Box, Typography } from '@mui/material';
import UniversalCard from '@/components/card';
import { gql, useQuery } from '@apollo/client';

const GET_ANIME_LIST = gql`
    query GetAnimeList {
        Page(perPage:10)
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
    const { loading, error, data} = useQuery(GET_ANIME_LIST)
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
    // console.log(data)
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
            {data?.Page.media.map((x: any) => (
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
        </Box>
    )
}