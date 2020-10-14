import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Button,
    Col,
    FormControl,
    FormGroup,
    FormLabel,
} from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import { Insurer, Policy, PolicyType } from '../../types';

const axios = require('axios');

export interface CreatePolicyPageProps extends RouteComponentProps {}

export const CreatePolicyPage = ({ match, history }: CreatePolicyPageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [policy, setPolicy] = useState({
        customerName: '',
        customerAddress: '',
        premium: '0',
        policyType: 0,
        insurer: 0,
    } as Policy);
    const [policyTypes, setPolicyTypes] = useState([] as PolicyType[]);
    const [insurers, setInsurers] = useState([] as Insurer[]);
    const [error, setError] = useState(null as null | string);

    useEffect(() => {
        const getPolicyTypes = `${process.env.REACT_APP_API_URL}/policy-type`;
        const getInsurers = `${process.env.REACT_APP_API_URL}/insurer`;

        axios
            .get(getPolicyTypes)
            .then((response: AxiosResponse<PolicyType[]>) => {
                setIsLoading(false);

                console.log(response.data);

                setPolicyTypes(response.data);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });

        axios
            .get(getInsurers)
            .then((response: AxiosResponse<Insurer[]>) => {
                setIsLoading(false);
                setInsurers(response.data);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });
    }, []);

    const createPolicy = () => {
        if ('' === policy.customerName) {
            setError('You must enter a value for the customer name');
            return;
        }

        if ('' === policy.customerAddress) {
            setError('You must enter a value for the customer address');
            return;
        }

        if (0 >= parseFloat(policy.premium)) {
            setError('Please enter a valid number for the premium');
            return;
        }

        if (0 === policy.policyType as number) {
            setError('Please select a policy type');
            return;
        }

        if (0 === policy.insurer as number) {
            setError('Please select an insurer');
            return;
        }

        setPolicy({
            ...policy,
            premium: parseFloat(policy.premium).toString(),
        });

        // API call
        const postUrl = `${process.env.REACT_APP_API_URL}/policy/`;

        axios
            .post(postUrl, policy)
            .then((response: AxiosResponse) => {
                history.push(`/policy/list`);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });
    };

    return (
        <Col>
            <h1>Create Policy </h1>
            {isLoading && <p>Loading...</p>}

            <FormGroup>
                <FormLabel>Customer Name</FormLabel>
                <FormControl
                    type="text"
                    value={policy.customerName}
                    placeholder="Enter customer name"
                    onChange={e => {
                        setPolicy({ ...policy, customerName: e.target.value });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Customer Address</FormLabel>
                <FormControl
                    type="text"
                    value={policy.customerAddress}
                    placeholder="Enter customer address"
                    onChange={e => {
                        setPolicy({
                            ...policy,
                            customerAddress: e.target.value,
                        });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Premium</FormLabel>
                <FormControl
                    type="text"
                    value={policy.premium}
                    placeholder="Enter premium"
                    onChange={e => {
                        setPolicy({
                            ...policy,
                            premium: e.target.value,
                        });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Policy Type</FormLabel>
                <FormControl
                    as="select"
                    onChange={e => {
                        setPolicy({
                            ...policy,
                            policyType: parseInt(e.target.value),
                        });
                    }}
                >
                    <option value="0">Select Policy Type</option>
                    {policyTypes
                        .sort((a, b) =>
                            (a.id as number) > (b.id as number) ? 1 : -1
                        )
                        .map(policyType => (
                            <option
                                key={policyType.id}
                                value={policyType.id as number}
                            >
                                {policyType.name}
                            </option>
                        ))}
                </FormControl>
            </FormGroup>
            <FormGroup>
                <FormLabel>Insurer</FormLabel>
                <FormControl
                    as="select"
                    onChange={e => {
                        setPolicy({
                            ...policy,
                            insurer: parseInt(e.target.value),
                        });
                    }}
                >
                    <option value="0">Select Insurer</option>

                    {insurers
                        .sort((a, b) =>
                            (a.id as number) > (b.id as number) ? 1 : -1
                        )
                        .map(insurer => (
                            <option
                                key={insurer.id}
                                value={insurer.id as number}
                            >
                                {insurer.name}
                            </option>
                        ))}
                </FormControl>
            </FormGroup>
            <Button onClick={createPolicy} variant="success">
                Create
            </Button>
            {null !== error && <p>{error}</p>}
        </Col>
    );
};

export default CreatePolicyPage;
