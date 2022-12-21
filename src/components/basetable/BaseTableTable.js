import React, { useEffect, useState } from "react";
import {
  Button,
  Tr,
  Th,
  Td,
  TableContainer,
  Table,
  Thead,
  Tbody,
  ButtonGroup,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { db } from "../../firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

function BaseTableTable(props) {
  const [dataList,setDataList] = useState([]);

  useEffect(() => {
    setDataList([]);
    const readData = async () => {
        try {
          const docRef = collection(db, `${props.collection}`);
          const snapShot = await getDocs(docRef);
          snapShot.forEach((doc) => {
            setDataList(dataList => [...dataList, { id: doc.id, name: doc.data().name }]);
            console.log(dataList);
          });
        } catch (error) {
          console.log(error);
        }
      };

      return(() => {
          readData();
      })
  },[]);

  console.log(dataList);

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
            {dataList ? (
                dataList.map((row, index) => (
                    <Tr key={row.id}>
                        <Td>{index + 1}</Td>
                        <Td>{row.name}</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td isNumeric>
                            <ButtonGroup>
                            <Button>
                                <DeleteIcon />
                            </Button>
                            <Button>edit</Button>
                            </ButtonGroup>
                        </Td>
                    </Tr>
                ))
            ) : (
                <tr>
                    
                </tr>
            )}
            {/* <Tr>
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
                  <Button>edit</Button>
                </ButtonGroup>
              </Td>
            </Tr> */}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BaseTableTable;
