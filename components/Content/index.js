import { Box } from "@chakra-ui/react";
import MapWrapper from "../MapWrapper";
import Title from "./Title";

const Content = () => {
    return (
        <Box mt={'30px'}>
            <Title />
            <MapWrapper />
        </Box>
    )
}

export default Content;
