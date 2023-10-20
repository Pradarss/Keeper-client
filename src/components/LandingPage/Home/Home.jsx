import { Box, Typography } from "@mui/material";
import { CardArea, Cards, HomeArea, HomeLeft, HomePara, HomeRight, HomeTitle, LandingArea } from "./HomeStyles";
import HomeNavbar from "../Navbar/HomeNavbar";
import trelloCards from "../InfoCard/CardInfo";
import InfoCard from "../InfoCard/InfoCard";

function Home(){
    return(
        <Box>
        <LandingArea>
            <HomeNavbar />
                <HomeArea >
                    <HomeLeft>
                        <HomeTitle>
                            <Typography variant='h3'>Trello lets you work more collaboratively and get more done.</Typography>
                        </HomeTitle>
                        <HomePara>
                            <Typography variant='p'>Trello's boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</Typography>
                        </HomePara>
                    </HomeLeft>
        <HomeRight>

        </HomeRight>
    </HomeArea>
        </LandingArea>
        <CardArea>
            <Typography variant="h3">What we offer</Typography>
            <Cards>
                    {trelloCards.map((item, index) => (
                <InfoCard key={index} {...item} />
                    ))}

            </Cards>
        </CardArea>
</Box>
    )
}

export default Home;