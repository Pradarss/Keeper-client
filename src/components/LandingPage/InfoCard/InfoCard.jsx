import { CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { CardArea, StyledCard } from "./CardStyles";

function InfoCard(props){
    return(
        <StyledCard>
            {/* <CardMedia
            component="img"
            alt= {props.title}
            height="140"
            image= {decodedImageUrl}
            /> */}
            <CardContent>
            <Typography gutterBottom variant="h6" component="div">
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