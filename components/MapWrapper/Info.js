import { Box, TableContainer, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { format } from 'date-fns'

const Info = ({ info }) => {
    const endPosition = info[info.length-1];

    return endPosition ?
        <Box my={{base: '25px', lg: '60px'}}>
            <TableContainer>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>SHIP_ID</Th>
                            <Th>MMSI</Th>
                            <Th>IMO</Th>
                            <Th>SPEED</Th>
                            <Th>DATE</Th>
                            <Th>TIME</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td textAlign={'left'}>{endPosition[0]}</Td>
                            <Td textAlign={'left'}>{endPosition[1]}</Td>
                            <Td textAlign={'left'}>{endPosition[9]}</Td>
                            <Td textAlign={'left'}>{endPosition[4]}</Td>
                            <Td textAlign={'left'}>{format(new Date(endPosition[8]), 'MM/dd/yyyy')}</Td>
                            <Td textAlign={'left'}>{format(new Date(endPosition[8]), 'HH:m:ss')}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box> : <></>
}

export default Info;
