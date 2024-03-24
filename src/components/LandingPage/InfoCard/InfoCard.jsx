import { CardContent, Divider, Typography } from "@mui/material";
import {  StyledCard } from "./CardStyles";

function InfoCard(props){
    return(
        <StyledCard>
            <CardContent>
            <Typography sx={{fontFamily: "'Montserrat', sans-serif"}} gutterBottom variant="h6" component="div">
            {props.title}
            </Typography>
            <Divider variant="middle" />
            <Typography mt={6} variant="body1" color="text.secondary">
            {props.description}
            </Typography>
            </CardContent>
      </StyledCard>
    )

}

export default InfoCard;