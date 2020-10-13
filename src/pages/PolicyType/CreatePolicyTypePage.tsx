import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import {
    Button,
    Col,
    FormControl,
    FormGroup,
    FormLabel,
} from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import { PolicyType } from '../../types';

const axios = require('axios');

export interface CreatePolicyTypePageProps extends RouteComponentProps {}

export const CreatePolicyTypePage = ({
    match,
    history,
}: CreatePolicyTypePageProps) => {
    const [policyType, setPolicyType] = useState({ name: '' } as PolicyType);
    const [error, setError] = useState(null as null | string);

    const createPolicyType = () => {
        if ('' === policyType.name) {
            setError('You must enter a value for the name');
        }

        // API call
        const postUrl = `${process.env.REACT_APP_API_URL}/policy-type/`;

        axios
            .post(postUrl, policyType)
            .then((response: AxiosResponse) => {
                history.push(`/policy-type/list`);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });
    };

    return (
        <Col>
            <h1>Create policy type</h1>
            <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormControl
                    type="text"
                    value={policyType.name}
                    placeholder="Enter name"
                    onChange={e => {
                        setPolicyType({
                            ...policyType,
                            name: e.target.value,
                        });
                    }}
                />
            </FormGroup>
            <Button onClick={createPolicyType} variant="success">
                Update
            </Button>
            {null !== error && <p>{error}</p>}
        </Col>
    );
};

export default CreatePolicyTypePage;
