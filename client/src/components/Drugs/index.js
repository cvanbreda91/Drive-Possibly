import React from 'react';
import { Box, Button, WrapItem } from '@chakra-ui/react'
import { Card, Flex, CardHeader, Text, Heading, CardBody, CardFooter } from '@chakra-ui/react'

const DrugList = ({ drugs }) => {
    console.log(drugs)
    return (

        <>
            <WrapItem m={5}>
                <Flex alignItems='center'>
                    {drugs &&
                        drugs.map(drug => (
                            <Card alignItems='center' key={drug._id} m={5}>
                                <CardHeader><Heading size='xs'>{drug.drugName}</Heading></CardHeader>
                                <CardBody><Text>{drug.description}</Text><Text>{drug.inventory} remain</Text></CardBody>
                                <Button
                                    m={1}
                                    bg='#53687E'
                                >Add!</Button>
                            </Card>
                        ))}
                </Flex>
            </WrapItem>
        </>

    );
};

export default DrugList;
