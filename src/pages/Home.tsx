import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

export const Home: React.FC<Props> = () => (
    <>
        <Col>
            <h1>Home</h1>

            <p>
                This application has been developed as a simple user interface
                to input and save Broker Policies.
            </p>
            <p>
                Use the navigation buttons in the header to view each page of
                the application.
            </p>
            <p>
                You can view, edit, create, and delete the following elements:
            </p>
            <ul>
                <li>Policy</li>
                <li>Policy Type</li>
                <li>Insurer</li>
            </ul>
        </Col>
    </>
);
