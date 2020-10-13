import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Col, Table } from 'react-bootstrap';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Insurer } from '../../types';

const axios = require('axios');

export interface ListInsurerPageProps extends RouteComponentProps {}

export const ListInsurerPage = ({ match }: ListInsurerPageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null as null | string);
    const [insurers, setInsurers] = useState([] as Insurer[]);

    useEffect(() => {
        const getUrl = `${process.env.REACT_APP_API_URL}/insurer`;

        axios
            .get(getUrl)
            .then((response: AxiosResponse<Insurer[]>) => {
                setIsLoading(false);
                setInsurers(response.data);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });
    }, []);

    const deleteItem = (insurer: Insurer) => {
        const deleteUrl = `${process.env.REACT_APP_API_URL}/insurer/${insurer.id}`;

        axios
            .delete(deleteUrl)
            .then((response: AxiosResponse) => {
                const updatedTypes = insurers.filter(i => i.id !== insurer.id);
                setInsurers(updatedTypes);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });
    };

    return (
        <Col>
            <h1>Insurers</h1>
            {isLoading && <p>Loading...</p>}

            {insurers.length > 0 && (
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {insurers
                            .sort((a, b) =>
                                (a.id as number) > (b.id as number) ? 1 : -1
                            )
                            .map(insurer => (
                                <tr key={insurer.id}>
                                    <td className="id">{insurer.id}</td>
                                    <td>{insurer.name}</td>
                                    <td className="actions">
                                        <div>
                                            <Link
                                                to={`/insurer/update/${insurer.id}`}
                                                className="btn btn-info mr-2"
                                            >
                                                Edit
                                            </Link>
                                            <Button
                                                variant="danger"
                                                onClick={() => {
                                                    if (
                                                        window.confirm(
                                                            'Delete this Insurer? It will also delete any Policies associated.'
                                                        )
                                                    ) {
                                                        deleteItem(insurer);
                                                    }
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            )}

            {null !== error && <p>{error}</p>}

            <Link to={'/insurer/create'} className="btn btn-success">
                Create new Insurer
            </Link>
        </Col>
    );
};

export default ListInsurerPage;
