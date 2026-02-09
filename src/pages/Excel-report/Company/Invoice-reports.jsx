"use client";

import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const ClientStatementPage = () => {
    /* ---------------- Filters ---------------- */
    const [filters, setFilters] = useState({
        client: "",
        financialYear: "",
        startDate: "",
        endDate: "",
    });

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    /* ---------------- DataTable Config ---------------- */
    const DataTableOptions = {
        columns: [
            { title: "Client Name" },
            { title: "Name" },
            { title: "Description" },
            { title: "Quantity" },
            { title: "Value" },
            { title: "GST" },
            { title: "Total" },
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
                                <Form.Label className="small mb-1">Client:</Form.Label>

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
