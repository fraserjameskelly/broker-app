import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { Button, Col, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Insurer } from '../../types';

const axios = require('axios');

export interface CreateInsurerPageProps extends RouteComponentProps {}

export const CreateInsurerPage = ({
    match,
    history,
}: CreateInsurerPageProps) => {
    const [insurer, setInsurer] = useState({ name: '' } as Insurer);
    const [error, setError] = useState(null as null | string);

    const createInsurer = () => {
        if ('' === insurer.name) {
            setError('You must enter a value for the name');
        }

        // API call
        const postUrl = `${process.env.REACT_APP_API_URL}/insurer/`;

        axios
            .post(postUrl, insurer)
            .then((response: AxiosResponse) => {
                history.push(`/insurer/list`);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });
    };

    return (
        <Col>
            <h1>Create Insurer</h1>
            <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormControl
                    type="text"
                    value={insurer.name}
                    placeholder="Enter name"
                    onChange={e => {
                        setInsurer({ ...insurer, name: e.target.value });
                    }}
                />
            </FormGroup>
            <Button onClick={createInsurer} variant="success">
                Create
            </Button>
            {null !== error && <p>{error}</p>}
        </Col>
    );
};

export default CreateInsurerPage;
