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
import { Insurer, Policy, PolicyType } from '../../types';

const axios = require('axios');

export interface UpdatePolicyPageProps
    extends RouteComponentProps<{ policyId: string }> {}

export const UpdatePolicyPage = ({ match, history }: UpdatePolicyPageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null as null | string);
    const [policy, setPolicy] = useState(null as null | Policy);
    const [policyTypes, setPolicyTypes] = useState([] as PolicyType[]);
    const [insurers, setInsurers] = useState([] as Insurer[]);

    const policyId = parseInt(match.params.policyId);

    useEffect(() => {
        // API call
        const getUrl = `${process.env.REACT_APP_API_URL}/policy/${policyId}`;
        const getPolicyTypes = `${process.env.REACT_APP_API_URL}/policy-type`;
        const getInsurers = `${process.env.REACT_APP_API_URL}/insurer`;

        axios
            .get(getUrl)
            .then((response: AxiosResponse<Policy>) => {
                setIsLoading(false);
                setPolicy(response.data);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });

        axios
            .get(getPolicyTypes)
            .then((response: AxiosResponse<PolicyType[]>) => {
                setIsLoading(false);
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

    const updatePolicy = () => {
        if (null !== policy) {
            console.log(policy.policyType);

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

            setPolicy({
                ...policy,
                premium: parseFloat(policy.premium).toString(),
            });

            // API call
            const postUrl = `${process.env.REACT_APP_API_URL}/policy/${policyId}`;

            axios
                .post(postUrl, policy)
                .then((response: AxiosResponse) => {
                    setIsLoading(false);
                    history.push(`/policy/list`);
                })
                .catch((response: AxiosResponse) => {
                    setError(response.data);
                });
        }
    };

    return (
        <Col>
            <h1>Update Policy {match.params.policyId}</h1>
            {isLoading && <p>Loading...</p>}

            {null !== policy && (
                <>
                    <FormGroup>
                        <FormLabel>Customer Name</FormLabel>
                        <FormControl
                            type="text"
                            value={policy.customerName}
                            placeholder="Enter customer name"
                            onChange={e => {
                                setPolicy({
                                    ...policy,
                                    customerName: e.target.value,
                                });
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
                            type="input"
                            value={policy.premium}
                            placeholder="Enter premium"
                            onChange={e => {
                                setPolicy({
                                    ...policy,
                                    premium: e.target.value,
                                });
                            }}
                            pattern="[0-9]+([\.,][0-9]+)?"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Policy Type</FormLabel>
                        <FormControl
                            as="select"
                            value={(policy.policyType as PolicyType).id as number}
                            onChange={e => {
                                setPolicy({
                                    ...policy,
                                    policyType: parseInt(e.target.value),
                                });
                            }}
                        >
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
                            value={(policy.insurer as Insurer).id as number}                            
                            onChange={e => {
                                setPolicy({
                                    ...policy,
                                    insurer: parseInt(e.target.value),
                                });
                            }}
                        >
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
                    <Button onClick={updatePolicy} variant="success">
                        Update
                    </Button>
                </>
            )}

            {null !== error && <p>{error}</p>}
        </Col>
    );
};

export default UpdatePolicyPage;
