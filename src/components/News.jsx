/* eslint-disable react/prop-types */
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function News({ news }) {
    const { urlToImage, url, title, description, source } = news;

    return (
        <Grid item md={6} lg={4}>
            <Card>
                {urlToImage && (
                    <CardMedia
                        component={"img"}
                        alt={`News Image ${title}`}
                        image={urlToImage}
                        height={"250px"}
                    />
                )}

                <CardContent>
                    <Typography variant="body1" color={"error"}>
                        {source.name}
                    </Typography>
                    <Typography variant="h5" component={"div"}>
                        {title}
                    </Typography>
                    <Typography variant="body2">{description}</Typography>
                </CardContent>

                <CardActions>
                    <Link
                        href={url}
                        target="_blank"
                        variant="button"
                        color={"primary"}
                        width={"100%"}
                        textAlign={"center"}
                        sx={{
                            textDecoration: "none"
                        }}
                    >
                        Read News
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
}
export default News;
