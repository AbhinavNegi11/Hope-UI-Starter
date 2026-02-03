"use client";

import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const ClientStatementPage = () => {
    /* ---------------- Filters ---------------- */
    const [filters, setFilters] = useState({
        product: "",
        financialYear: "",
        stauts: "",
        startDate: "",
        endDate: "",
    });

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    /* ---------------- DataTable Config ---------------- */
    const DataTableOptions = {
        columns: [
            { title: "Product" },
            { title: "Batch number" },
            { title: "Pack" },
            { title: "Mfg Date" },
            { title: "Exp Date" },
            { title: "Stock" },
        ],
        data: [], // EMPTY TABLE
    };

    return (
        <Row>
            <Col sm="12">
                <Card>
                    {/* ================= Header ================= */}

                    {/* ================= Filters ================= */}
                    <Card.Body>
                        <Row className="align-items-end g-2 mb-3">
                            <Col md={3}>
                                <Form.Label className="small mb-1">Product:</Form.Label>

                                <Form.Select
                                    size="sm"
                                    name="client"
                                    value={filters.client}
                                    onChange={handleFilterChange}
                                >
                                    <option value="">Client</option>
                                    <option value="ABC Pharma">ABC Pharma</option>
                                    <option value="Global Medicos">Global Medicos</option>
                                </Form.Select>
                            </Col>

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
                            <Col md={2}>
                                <Form.Label className="small mb-1">Status:</Form.Label>
                                <Form.Select
                                    size="sm"
                                    name="status"
                                    value={filters.status}
                                    onChange={handleFilterChange}
                                >
                                    <option value="all">All</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="pending">Pending</option>
                                </Form.Select>
                            </Col>
                            <Col md={2}>
                                <Form.Label className="small mb-1">Start Date:</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="date"
                                    name="startDate"
                                    value={filters.startDate}
                                    onChange={handleFilterChange}
                                />
                            </Col>

                            <Col md={2}>
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

export default ClientStatementPage;
