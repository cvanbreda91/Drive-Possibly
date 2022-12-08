import React from "react";
import DrugList from "../components/Drugs";
import { QUERY_DRUGS } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { Wrap } from '@chakra-ui/react'

const Drugs = (props) => {
    const { loading, data } = useQuery(QUERY_DRUGS);
    const drugs = data?.drugs || [];
    return (
        <Wrap spacing='30px'>
        <DrugList 
        drugs={drugs}/>
        </Wrap>
    );
}

export default Drugs;
