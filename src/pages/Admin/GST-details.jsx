"use client";

import { useState } from "react";
import { Row, Col, Button, Form, Badge } from "react-bootstrap";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const PaymentsPage = () => {
    /* ---------- Form State ---------- */
    const emptyUser = {
        description: "",
        label: "",
        taxgroup: "",
        activevalue: "0.0"
    };

    const [user, setUser] = useState(emptyUser);
    const [users, setUsers] = useState([
        {
            description: "Food 18",
            label: "Food 18",
            taxgroup: "IGST",
            value: "18",
            status: "False",
            action: ""
        },
        {
            description: "Food CGST 9",
            label: "Food CGST 9",
            taxgroup: "CGST",
            value: "9",
            status: "False",
            action: ""
        },
        {
            description: "Food SGST 9",
            label: "Food SGST 9",
            taxgroup: "SGST",
            value: "9",
            status: "False",
            action: ""
        },
    ]);

    /* ---------- Handlers ---------- */
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!user.email || !user.permission) return;
        setUsers([...users, user]);
        setUser(emptyUser);
    };

    const handleReset = () => setUser(emptyUser);

    const handleDelete = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    const handleEdit = (index) => {
        setUser(users[index]);
        handleDelete(index);
    };

    /* ---------- DataTable Config ---------- */
    /* ---------- DataTable Config ---------- */
    const DataTableOptions = {
        columns: [
            { title: "Description" },
            { title: "Label" },
            { title: "Taxgroup" },
            { title: "Value" },
            { title: "Status" },
            { title: "Action" },
        ],
        data: users.map((item, index) => [
            item.description,
            item.label,
            item.taxgroup,
            item.value,
            item.status,
            `
  <button class="btn btn-sm btn-success me-1" data-id="${index}">
    Edit
  </button>
  <button class="btn btn-sm btn-primary" data-id="${index}">
    Delete
  </button>
`
            ,
        ]),
    };


    return (
        <Row>
            <Col sm="12">
                <Card>
                    <Card.Body>
                        <Row>
                            {/* ========== LEFT : FORM ========== */}
                            <Col md={4}>
                                <h5 className="mb-3 ">GST Form</h5>

                                <Form>
                                    <Row className="g-2">
                                        <Col md={12}>
                                            <Form.Label>Description:</Form.Label>
                                            <Form.Control
                                                name="description"
                                                value={user.description}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                        <Col md={12}>
                                            <Form.Label>Label:</Form.Label>
                                            <Form.Control
                                                name="description"
                                                value={user.description}
                                                onChange={handleChange}
                                            />
                                        </Col>

                                        <Col md={12}>
                                            <Form.Label>Tax Group:</Form.Label>
                                            <Form.Select
                                                name="taxgroup"
                                                value={user.taxgroup}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Tax Group</option>
                                                <option value="client">IGST</option>
                                                <option value="payment">CGST</option>
                                                <option value="admin">SGST</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Label>Active Value:</Form.Label>
                                            <Form.Control
                                                name="activevalue"
                                                value={user.activevalue}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                    </Row>

                                    {/* Buttons */}
                                    <div className="mt-3 d-flex gap-2">
                                        <Button onClick={handleSubmit}>Submit</Button>
                                        <Button variant="secondary" onClick={handleReset}>
                                            Reset
                                        </Button>
                                    </div>
                                </Form>
                            </Col>

                            {/* ========== RIGHT : DATATABLE ========== */}
                            <Col md={8}>
                                <div className="table-responsive">
                                    <DataTable
                                        className="table-striped table-bordered"
                                        columns={DataTableOptions.columns}
                                        data={DataTableOptions.data}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};
PaymentsPage.layout = "admin";
export default PaymentsPage;
