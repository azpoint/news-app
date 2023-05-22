import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import useNews from "../Hooks/useNews";

import News from "./News";

function NewsList() {
    const { newsData, totalNews, handleChangePage, page } = useNews();

    const totalPages = Math.ceil(totalNews / 20) 

    return (
        <>
            <Typography
                textAlign={"center"}
                marginY={5}
                variant="h3"
                component={"h2"}
            >
                Latest News
            </Typography>

            <Grid container spacing={2}>
                {newsData.map((news) => (
                    <News news={news} key={news.url} />
                ))}
            </Grid>

            <Stack
                spacing={2}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                    marginY: 5
                }}
            >
                <Pagination count={totalPages} color="primary" onChange={handleChangePage} page={page}/>
            </Stack>
        </>
    );
}
export default NewsList;
