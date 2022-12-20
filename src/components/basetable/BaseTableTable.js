import React from 'react'
import {
    Button,
    Tr,
    Th,
    Td,
    TableContainer,
    Table,
    Thead,
    Tbody,
    ButtonGroup
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";


function BaseTableTable(props) {
    return (
        <div>
            <TableContainer p="9">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th fontSize="1.5rem">{props.col1}</Th>
                            <Th fontSize="1.5rem">{props.col2}</Th>
                            <Th fontSize="1.5rem">{props.col4}</Th>
                            <Th fontSize="1.5rem">{props.col5}</Th>
                            <Th fontSize="1.5rem">{props.col6}</Th>
                            <Th isNumeric fontSize="1.5rem">
                                {props.col3}
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td isNumeric>
                                <ButtonGroup>
                                    <Button>
                                        <DeleteIcon />
                                    </Button>
                                    <Button>
                                        edit
                                    </Button>
                                </ButtonGroup>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BaseTableTable
