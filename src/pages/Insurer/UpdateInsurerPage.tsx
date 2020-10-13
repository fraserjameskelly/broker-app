import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Col, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import { Insurer } from '../../types';

const axios = require('axios');

export interface UpdateInsurerPageProps
    extends RouteComponentProps<{ insurerId: string }> {}

export const UpdateInsurerPage = ({
    match,
    history,
}: UpdateInsurerPageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null as null | string);
    const [insurer, setInsurer] = useState(null as null | Insurer);

    const insurerId = parseInt(match.params.insurerId);

    useEffect(() => {
        // API call
        const getUrl = `${process.env.REACT_APP_API_URL}/insurer/${insurerId}`;

        axios
            .get(getUrl)
            .then((response: AxiosResponse<Insurer>) => {
                setIsLoading(false);
                setInsurer(response.data);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });
    }, []);

    const updateInsurer = () => {
        // API call
        const postUrl = `${process.env.REACT_APP_API_URL}/insurer/${insurerId}`;

        axios
            .post(postUrl, insurer)
            .then((response: AxiosResponse) => {
                setIsLoading(false);
                history.push(`/insurer/list`);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });
    };

    return (
        <Col>
            <h1>Insurer {match.params.insurerId}</h1>
            {isLoading && <p>Loading...</p>}

            {null !== insurer && (
                <>
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormControl
                            type="text"
                            value={insurer.name}
                            placeholder="Enter name"
                            onChange={e => {
                                setInsurer({
                                    ...insurer,
                                    name: e.target.value,
                                });
                            }}
                        />
                    </FormGroup>
                    <Button onClick={updateInsurer} variant="success">
                        Create
                    </Button>
                </>
            )}

            {null !== error && <p>{error}</p>}
        </Col>
    );
};

export default UpdateInsurerPage;
