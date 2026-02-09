"use client";

import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const ClientStatementPage = () => {
    /* ---------------- Filters ---------------- */
    const [filters, setFilters] = useState({
        financialYear: "",
        startDate: "",
        endDate: "",
    });

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    /* ---------------- DataTable Config ---------------- */
    const orders = [
        {
            paymentdate: "04/01/2024",
            description: "Elite",
            paymentmode: "Online",
            amount: "4800",
        },
        {
            paymentdate: "31/12/2023",
            description: "Pradeep Agency",
            paymentmode: "Cheque",
            amount: "4788",
        },
        {
            paymentdate: "31/12/2023",
            description: "galaxy orthopedic",
            paymentmode: "Cash",
            amount: "24800",
        },

    ];
    const DataTableOptions = {
        columns: [
            { title: "Payment Date" },
            { title: "Description" },
            { title: "Payment Mode" },
            { title: "Amount" },
        ],
        data: orders.map((order) => [
            order.paymentdate,
            order.description,
            order.paymentmode,
            order.amount,
        ])
    };

    return (
        <Row>
            <Col sm="12">
                <Card>

                    <Card.Body>
                        <Row className="align-items-end g-2 mb-3">


                            <Col md={3}>
                                <Form.Label className="small mb-1">Financial Year:</Form.Label>

                                <Form.Select
                                    size="sm"
                                    name="financialYear"
                                    value={filters.financialYear}
                                    onChange={handleFilterChange}
                                >
                                    <option value="">Financial Year</option>
                                    <option value="2023-24">2023-24</option>
                                    <option value="2024-25">2024-25</option>
                                </Form.Select>
                            </Col>

                            <Col md={3}>
                                <Form.Label className="small mb-1">Start Date:</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="date"
                                    name="startDate"
                                    value={filters.startDate}
                                    onChange={handleFilterChange}
                                />
                            </Col>

                            <Col md={3}>
                                <Form.Label className="small mb-1">End Date:</Form.Label>

                                <Form.Control
                                    size="sm"
                                    type="date"
                                    name="endDate"
                                    value={filters.endDate}
                                    onChange={handleFilterChange}
                                />
                            </Col>


                        </Row>
                        <div className="d-flex justify-content-end mb-2">
                            <Button size="sm" variant="success">
                                Export Excel
                            </Button>
                        </div>


                        {/* ================= DataTable ================= */}
                        <div className="table-responsive">
                            <DataTable
                                className="table-striped table-bordered"
                                columns={DataTableOptions.columns}
                                data={DataTableOptions.data}
                            />
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

ClientStatementPage.layout = "excel-reports";
export default ClientStatementPage;
