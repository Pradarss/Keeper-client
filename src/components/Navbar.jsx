function Navbar(){
    return(
        <StyledAppbar>
        <StyledToolbar >
           <Typography variant="h6">Portfolio</Typography> 
            <LinksArea>
                <Typography>Home</Typography>
                <Typography>Contact me</Typography>
                <Typography>Dwownload CV</Typography>
            </LinksArea>
        </StyledToolbar>
        </StyledAppbar>
    )
}

export default Navbar;