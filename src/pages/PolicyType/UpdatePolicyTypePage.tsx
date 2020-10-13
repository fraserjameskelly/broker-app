import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
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

export interface UpdatePolicyTypePageProps
    extends RouteComponentProps<{ policyTypeId: string }> {}

export const UpdatePolicyTypePage = ({
    match,
    history,
}: UpdatePolicyTypePageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null as null | string);
    const [policyType, setPolicyType] = useState(null as null | PolicyType);

    const policyTypeId = parseInt(match.params.policyTypeId);

    useEffect(() => {
        // API call
        const getUrl = `${process.env.REACT_APP_API_URL}/policy-type/${policyTypeId}`;

        axios
            .get(getUrl)
            .then((response: AxiosResponse<PolicyType>) => {
                setIsLoading(false);
                setPolicyType(response.data);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });
    }, []);

    const updatePolicyType = () => {
        // API call
        const postUrl = `${process.env.REACT_APP_API_URL}/policy-type/${policyTypeId}`;

        axios
            .post(postUrl, policyType)
            .then((response: AxiosResponse) => {
                setIsLoading(false);
                history.push(`/policy-type/list`);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });
    };

    return (
        <Col>
            <h1>Policy type {match.params.policyTypeId}</h1>
            {isLoading && <p>Loading...</p>}

            {null !== policyType && (
                <>
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
                    <Button onClick={updatePolicyType} variant="success">
                        Update
                    </Button>
                </>
            )}

            {null !== error && <p>{error}</p>}
        </Col>
    );
};

export default UpdatePolicyTypePage;
