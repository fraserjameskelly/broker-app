import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Button,
    Col,
    FormControl,
    InputGroup,
    Row,
    Table,
} from 'react-bootstrap';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Insurer, Policy, PolicyType } from '../../types';

const axios = require('axios');

export interface ListPolicyPageProps extends RouteComponentProps {}

export const ListPolicyPage = ({ match }: ListPolicyPageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null as null | string);

    const [search, setSearch] = useState('' as string);
    const [sort, setSort] = useState({ name: 'ID', dir: 'ASC' });
    const [policyTypeFilter, setPolicyTypeFilter] = useState('' as string);
    const [insurerFilter, setInsurerFilter] = useState('' as string);

    const [policyTypes, setPolicyTypes] = useState([] as PolicyType[]);
    const [insurers, setInsurers] = useState([] as Insurer[]);

    const [policies, setPolicies] = useState([] as Policy[]);
    const [basePolicies, setBasePolicies] = useState([] as Policy[]);

    useEffect(() => {
        const getUrl = `${process.env.REACT_APP_API_URL}/policy`;
        const getPolicyTypes = `${process.env.REACT_APP_API_URL}/policy-type`;
        const getInsurers = `${process.env.REACT_APP_API_URL}/insurer`;

        axios
            .get(getUrl)
            .then((response: AxiosResponse<Policy[]>) => {
                setIsLoading(false);
                setBasePolicies(
                    response.data.sort((a, b) =>
                        (a.id as number) > (b.id as number) ? 1 : -1
                    )
                );
                setPolicies(
                    response.data.sort((a, b) =>
                        (a.id as number) > (b.id as number) ? 1 : -1
                    )
                );
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

    const deleteItem = (policy: Policy) => {
        const deleteUrl = `${process.env.REACT_APP_API_URL}/policy/${policy.id}`;

        axios
            .delete(deleteUrl)
            .then((response: AxiosResponse) => {
                const updatedTypes = policies.filter(i => i.id !== policy.id);
                setPolicies(updatedTypes);
            })
            .catch((response: AxiosResponse) => {
                setError(response.data);
            });
    };

    const searchPolicies = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchVal = e.target.value;
        setSearch(searchVal);

        if (searchVal === '') {
            setPolicies(basePolicies);
        } else {
            const updatedPolicies = policies.filter(
                i =>
                    i.customerName
                        .toLowerCase()
                        .includes(searchVal.toLowerCase()) ||
                    i.customerAddress
                        .toLowerCase()
                        .includes(searchVal.toLowerCase())
            );
            setPolicies(updatedPolicies);
        }
    };

    const filterPolicyType = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filterVal = e.target.value;
        setPolicyTypeFilter(filterVal);

        if (filterVal === '') {
            setPolicies(basePolicies);
        } else {
            const updatedPolicies = basePolicies.filter(
                i => (i.policyType as PolicyType).id === parseInt(filterVal)
            );
            setPolicies(updatedPolicies);

            //reset other filters
            setSearch('');
            setSort({ name: 'ID', dir: 'ASC' });
        }
    };

    const filterInsurer = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filterVal = e.target.value;
        setInsurerFilter(filterVal);

        if (filterVal === '') {
            setPolicies(basePolicies);
        } else {
            const updatedPolicies = basePolicies.filter(
                i => (i.insurer as Insurer).id === parseInt(filterVal)
            );
            setPolicies(updatedPolicies);

            //reset other filters
            setSearch('');
            setSort({ name: 'ID', dir: 'ASC' });
        }
    };

    const sortPolicies = (e: React.MouseEvent<HTMLButtonElement>) => {
        const sortVal = e.currentTarget.value;

        const dir =
            sort.name !== sortVal ||
            (sort.name === sortVal && sort.dir === 'DESC')
                ? 'ASC'
                : 'DESC';

        setSort({ name: sortVal, dir: dir });

        if (sortVal === 'ID') {
            if (dir === 'ASC') {
                const updatedPolicies = policies.sort((a, b) =>
                    (a.id as number) > (b.id as number) ? 1 : -1
                );
                setPolicies(updatedPolicies);
            } else {
                const updatedPolicies = policies.sort((a, b) =>
                    (a.id as number) < (b.id as number) ? 1 : -1
                );
                setPolicies(updatedPolicies);
            }
        } else if (sortVal === 'Name') {
            if (dir === 'ASC') {
                const updatedPolicies = policies.sort((a, b) =>
                    a.customerName > b.customerName ? 1 : -1
                );
                setPolicies(updatedPolicies);
            } else {
                const updatedPolicies = policies.sort((a, b) =>
                    a.customerName < b.customerName ? 1 : -1
                );
                setPolicies(updatedPolicies);
            }
        } else if (sortVal === 'Premium') {
            if (dir === 'ASC') {
                const updatedPolicies = policies.sort((a, b) =>
                    a.premium > b.premium ? 1 : -1
                );
                setPolicies(updatedPolicies);
            } else {
                const updatedPolicies = policies.sort((a, b) =>
                    a.premium < b.premium ? 1 : -1
                );
                setPolicies(updatedPolicies);
            }
        }
    };

    return (
        <Col>
            <h1>Policies</h1>
            {isLoading && <p>Loading...</p>}

            <div className="mb-3">
                <FormControl
                    type="text"
                    value={search}
                    placeholder="Search"
                    onChange={searchPolicies}
                    className="table-search"
                />
            </div>
            <Row className="filter-row mb-3">
                <Col xs={12} md={6}>
                    <FormControl
                        as="select"
                        onChange={filterPolicyType}
                        value={policyTypeFilter}
                    >
                        <option value="">Filter by Policy Type</option>
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
                </Col>
                <Col xs={12} md={6}>
                    <FormControl
                        as="select"
                        onChange={filterInsurer}
                        value={insurerFilter}
                    >
                        <option value="">Filter by Insurer</option>
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
                </Col>
            </Row>

            {policies.length > 0 && (
                <>
                    <Table striped bordered responsive>
                        <thead>
                            <tr>
                                <th>
                                    <button
                                        className={`sort-button ${
                                            sort.name === 'ID' && sort.dir
                                        }`}
                                        onClick={sortPolicies}
                                        value="ID"
                                    >
                                        ID
                                    </button>
                                </th>
                                <th>
                                    <button
                                        className={`sort-button ${
                                            sort.name === 'Name' && sort.dir
                                        }`}
                                        onClick={sortPolicies}
                                        value="Name"
                                    >
                                        Customer Name
                                    </button>
                                </th>
                                <th className="d-none d-md-table-cell">
                                    Customer Address
                                </th>
                                <th className="d-none d-md-table-cell">
                                    <button
                                        className={`sort-button ${
                                            sort.name === 'Premium' && sort.dir
                                        }`}
                                        onClick={sortPolicies}
                                        value="Premium"
                                    >
                                        Premium
                                    </button>
                                </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {policies.map(policy => (
                                <tr key={policy.id}>
                                    <td>{policy.id}</td>
                                    <td>{policy.customerName}</td>
                                    <td className="d-none d-md-table-cell">
                                        {policy.customerAddress}
                                    </td>
                                    <td className="d-none d-md-table-cell">
                                        {policy.premium}
                                    </td>
                                    <td className="actions">
                                        <div>
                                            <Link
                                                to={`/policy/update/${policy.id}`}
                                                className="btn btn-info mr-2"
                                            >
                                                Edit
                                            </Link>
                                            <Button
                                                variant="danger"
                                                onClick={() => {
                                                    if (
                                                        window.confirm(
                                                            'Delete this item?'
                                                        )
                                                    ) {
                                                        deleteItem(policy);
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
                </>
            )}

            {null !== error && <p>{error}</p>}

            <Link to={'/policy/create'} className="btn btn-success">
                Create new Policy
            </Link>
        </Col>
    );
};

export default ListPolicyPage;
