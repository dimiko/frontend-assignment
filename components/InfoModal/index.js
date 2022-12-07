import { Flex, Text } from '@chakra-ui/react';
import { InfoWindow } from '@react-google-maps/api';

const InfoModal = ({ selectedMarker, onCloseClick }) => {
    return (
        <InfoWindow
            onCloseClick={onCloseClick}
            position={{
                lat: Number(selectedMarker[5]),
                lng: Number(selectedMarker[4]),
            }}
        >
            <Flex direction={'column'} p={'18px'} className="modalInfoMap">
                <Text
                    _hover={{
                        cursor: 'pointer',
                        color: '#ccc',
                    }}
                    onClick={onCloseClick}
                    textAlign={'right'}
                    fontSize={'18px'}
                    marginTop={'-20px'}
                    margin-right={'-15px'}
                    color={'black'}
                >

                </Text>
                <Text as={'h1'} color={'brand.900'} fontSize={'18px'} fontWeight={'700'} mb={'10px'}>
                    {'MMSI: '}{selectedMarker[0]}
                </Text>
                <Text as={'h1'} color={'brand.900'} fontSize={'18px'} fontWeight={'700'} mb={'10px'}>
                    {'IMO: '}{selectedMarker[1]}
                </Text>
            </Flex>
        </InfoWindow>
    );
};

export default InfoModal;
