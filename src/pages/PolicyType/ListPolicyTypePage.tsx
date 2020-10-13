import { AxiosResponse } from 'axios';
import { Button, Table } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { PolicyType } from '../../types';

const axios = require('axios');

export interface ListPolicyTypePageProps extends RouteComponentProps {}

export const ListPolicyTypePage = ({ match }: ListPolicyTypePageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null as null | string);
    const [policyTypes, setPolicyTypes] = useState([] as PolicyType[]);

    useEffect(() => {
        const getUrl = `${process.env.REACT_APP_API_URL}/policy-type`;

        axios
            .get(getUrl)
            .then((response: AxiosResponse<PolicyType[]>) => {
                setIsLoading(false);
                setPolicyTypes(response.data);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });
    }, []);

    const deleteItem = (policyType: PolicyType) => {
        const deleteUrl = `${process.env.REACT_APP_API_URL}/policy-type/${policyType.id}`;

        axios
            .delete(deleteUrl)
            .then((response: AxiosResponse) => {
                const updatedTypes = policyTypes.filter(
                    i => i.id !== policyType.id
                );
                setPolicyTypes(updatedTypes);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });
    };

    return (
        <>
            <h1>Policy types</h1>
            {isLoading && <p>Loading...</p>}

            {policyTypes.length > 0 && (
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {policyTypes
                            .sort((a, b) =>
                                (a.id as number) > (b.id as number) ? 1 : -1
                            )
                            .map(policyType => (
                                <tr key={policyType.id}>
                                    <td>{policyType.id}</td>
                                    <td>{policyType.name}</td>
                                    <td className="actions">
                                        <div>
                                            <Link
                                                to={`/policy-type/update/${policyType.id}`}
                                                className="btn btn-info mr-2"
                                            >
                                                Edit
                                            </Link>
                                            <Button
                                                variant="danger"
                                                onClick={() => {
                                                    if (
                                                        window.confirm(
                                                            'Delete this Policy Type? It will also delete any Policies associated.'
                                                        )
                                                    ) {
                                                        deleteItem(policyType);
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

            <Link to={'/policy-type/create'} className="btn btn-success">
                Create new Policy Type
            </Link>
        </>
    );
};

export default ListPolicyTypePage;
