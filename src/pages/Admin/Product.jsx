"use client";

import { useState } from "react";
import { Row, Col, Button, Form, Badge } from "react-bootstrap";
import Card from "@/components/bootstrap/card";
import DataTable from "@/components/DataTable";

const PaymentsPage = () => {
    const emptyUser = {
        name: "",
        productcode: "",
        hsncode: "",
        producttype: "",
        primeunit: "",
        secondaryunit: "",
        composition: "",
        description: "",
        batchcodedefault: "",
        defaultgst: "",
    };

    const [user, setUser] = useState(emptyUser);
    const [users, setUsers] = useState([
        {
            name: "Detols",
            prodcode: "det001",
            hsncode: "Det89",
            composition: "dfsdfs",
            description: "",
            defaulttax: "food 18-18",
            producttype: "MEDICAL GOODS",
            action: "",
        },

    ]);
    const [secondaryUnits, setSecondaryUnits] = useState([
        { secondaryUnit: "", primeCount: "", secondaryCount: "" },
    ]);
    const handleSecondaryChange = (index, field, value) => {
        const updated = [...secondaryUnits];
        updated[index][field] = value;
        setSecondaryUnits(updated);
    };

    const addSecondaryUnit = () => {
        setSecondaryUnits([
            ...secondaryUnits,
            { secondaryUnit: "", primeCount: "", secondaryCount: "" },
        ]);
    };

    const removeSecondaryUnit = (index) => {
        setSecondaryUnits(secondaryUnits.filter((_, i) => i !== index));
    };

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

    const DataTableOptions = {
        columns: [
            { title: "name" },
            { title: "prod code" },
            { title: "hsn code" },
            { title: "composition" },
            { title: "description" },
            { title: "default tax" },
            { title: "product type" },
            { title: "action" },
        ],
        data: users.map((item, index) => [
            item.name,
            item.prodcode,
            item.hsncode,
            item.composition,
            item.description,
            item.defaulttax,
             `
        <select class="form-select form-select-sm" data-id="${index}">
          <option value="goods" ${item.producttype === "goods" ? "selected" : ""}>Goods</option>
          <option value="medical_goods" ${item.producttype === "medical_goods" ? "selected" : ""}>Medical Goods</option>
          <option value="service" ${item.producttype === "service" ? "selected" : ""}>Service</option>
        </select>
        `,

            `
  <button class="btn btn-sm btn-success me-1" data-id="${index}">
    Edit
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
                                <h5 className="mb-3 ">Product Form</h5>

                                <Form>
                                    <Row className="g-2">
                                        <Col md={12}>
                                            <Form.Label>Name:</Form.Label>
                                            <Form.Control
                                                name="name"
                                                value={user.name}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                        <Col md={12}>
                                            <Form.Label>Product Code:</Form.Label>
                                            <Form.Control
                                                name="productcode"
                                                value={user.productcode}
                                                onChange={handleChange}
                                            />
                                        </Col>


                                        <Col md={12}>
                                            <Form.Label>HSN Code:</Form.Label>
                                            <Form.Control
                                                name="hsncode"
                                                value={user.hsncode}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                    </Row>
                                    <Col md={12}>
                                        <Form.Label>Product Type</Form.Label>
                                        <Form.Select
                                            name="productType"
                                            value={user.productType}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Product Type</option>
                                            <option value="medical_goods">Medical Goods</option>
                                            <option value="goods">Goods</option>
                                            <option value="services">Services</option>
                                            <option value="digital_goods">Digital Goods</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Label>Prime Unit</Form.Label>
                                        <Form.Select
                                            name="primeUnit"
                                            value={user.primeUnit}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Prime Unit</option>
                                            <option value="pcs">Pieces (pcs)</option>
                                            <option value="kg">Kilogram (kg)</option>
                                            <option value="gm">Gram (gm)</option>
                                            <option value="ltr">Liter (ltr)</option>
                                            <option value="ml">Milliliter (ml)</option>
                                            <option value="box">Box</option>
                                            <option value="pack">Pack</option>
                                        </Form.Select>
                                    </Col>

                                    <h6 className="mt-3">Secondary Unit :</h6>

                                    <Row className="fw-bold mb-2">
                                        <Col md={4}>Secondary Unit</Col>
                                        <Col md={3}>Prime Unit Count</Col>
                                        <Col md={3}>Secondary Unit Count</Col>
                                        <Col md={2}></Col>
                                    </Row>

                                    {secondaryUnits.map((item, index) => (
                                        <Row className="mb-2 align-items-center" key={index}>
                                            <Col md={4}>
                                                <Form.Select
                                                    value={item.secondaryUnit}
                                                    onChange={(e) =>
                                                        handleSecondaryChange(index, "secondaryUnit", e.target.value)
                                                    }
                                                >
                                                    <option value="">--select--</option>
                                                    <option value="box">Box</option>
                                                    <option value="pack">Pack</option>
                                                    <option value="strip">Strip</option>
                                                </Form.Select>
                                            </Col>

                                            <Col md={3}>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Prime Count"
                                                    value={item.primeCount}
                                                    onChange={(e) =>
                                                        handleSecondaryChange(index, "primeCount", e.target.value)
                                                    }
                                                />
                                            </Col>

                                            <Col md={3}>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Secondary Count"
                                                    value={item.secondaryCount}
                                                    onChange={(e) =>
                                                        handleSecondaryChange(index, "secondaryCount", e.target.value)
                                                    }
                                                />
                                            </Col>

                                            <Col md={2} className="d-flex gap-2">
                                                {index === 0 ? (
                                                    <Button variant="danger" onClick={addSecondaryUnit}>
                                                        +
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        variant="danger"
                                                        onClick={() => removeSecondaryUnit(index)}
                                                    >
                                                        −
                                                    </Button>
                                                )}
                                            </Col>
                                        </Row>
                                    ))}
                                    <Col md={12}>
                                        <Form.Label>Composition:</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={2}
                                            placeholder="Enter composition"
                                        />
                                    </Col>
                                    <Col md={12}>
                                        <Form.Label>Description:</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={2}
                                            placeholder="Enter description"
                                        />
                                    </Col>
                                    <Col md={12} className="mt-2">
                                        <Form.Check
                                            label="Batch Code Default:"

                                            type="checkbox"
                                        />
                                    </Col>
                                    <Col md={12}>
                                        <Form.Label>Dfault GST:</Form.Label>
                                        <Form.Control
                                            name="defaultgst"
                                            value={user.defaultgst}
                                            onChange={handleChange}
                                        />
                                    </Col>

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

export default PaymentsPage;
