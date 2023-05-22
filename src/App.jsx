import { Container, Grid, Typography } from "@mui/material";

//Context
import { NewsProvider } from "./Context/NewsProvider";

//Components
import Form from "./components/Form";
import NewsList from "./components/NewsList";

function App() {
    return (
        <NewsProvider>
            <Container>
                <header>
                    <Typography
                        align="center"
                        marginY={5}
                        component="h1"
                        variant="h2"
                    >
                        News Search
                    </Typography>
                </header>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item sx={12} md={6} lg={4}>
                        <Form />
                    </Grid>
                </Grid>

                <NewsList/>
            </Container>
        </NewsProvider>
    );
}

export default App;
