import { Box, Flex, Button } from "@chakra-ui/react";
import React, {useState} from 'react';
import useLocations from "../../hooks";
import Loader from "../Loader";
import Info from "./Info";
import Map from "../Map";

const MapWrapper = () => {
    const { locationsData, isLoading } = useLocations();
    const [isChecked, setIsChecked] = useState(false);
    const [isPlay, setIsPlay] = useState(false);

    return (
        <Box mb={'20px'}>
            {
                locationsData !== undefined && locationsData !== null ? <Info info={locationsData} /> : null
            }

            <Flex py={'15px'} justifyContent={'space-between'} direction={{base: 'column', lg: 'row'}}>
                <Flex justifyContent={{base: 'space-between', lg: 'start'}}>
                    <Button colorScheme='blue' isDisabled={isPlay || isChecked} onClick={() => setIsChecked(!isChecked)}  mr={'30px'}>Start Position</Button>
                    <Button colorScheme='blue' isDisabled={isPlay || !isChecked} onClick={() => setIsChecked(!isChecked)}>Position Now</Button>
                </Flex>
                <Button colorScheme='blue' onClick={() => setIsPlay(!isPlay)} mt={{base: '15px', lg: '0'}}>
                    {
                        isPlay ? 'Stop' : 'Show all positions'
                    }
                </Button>
            </Flex>

            {
                isLoading ? (
                    <Loader />
                ) : <Map data={locationsData} isPlay={isPlay} isChecked={isChecked} />
            }

        </Box>
    )
}

export default MapWrapper;
