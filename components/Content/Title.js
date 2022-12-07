import { Box } from "@chakra-ui/react";

const Title = () => {
    return (
        <Box as={'h1'} textAlign={'center'} fontSize={{base: '24px', lg:'32px'}} lineHeight={{base: '30px', lg:'36px'}}>{'Daily Vessel tracks (markers and animation)\n'}</Box>
    )
}

export default Title;
