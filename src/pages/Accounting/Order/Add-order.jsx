"use client";

import { useState } from "react";
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import Card from "@/components/bootstrap/card";

/* ================= CONSTANTS ================= */
const emptyAddress = {
  name: "",
  contactName: "",
  street1: "",
  street2: "",
  landmark: "",
  city: "",
  state: "",
  country: "",
  areaPin: "",
  email: "",
  pan: "",
  phone: "",
  fax: "",
  drugLic: "",
  gstin: "",
  fssai: "",
};

const emptyOrderRow = {
  product: "",
  prodCode: "",
  pack: "",
  batchNo: "",
  mfgDate: "",
  expDate: "",
  mrp: "",
  price: "",
  quantity: "",
  taxDetails: "",
  discount: "",
  totalQuantity: "",
  discountAmount: "",
  amount: "",
  tax: "",
  total: "",
};

const AddOrderPage=()=> {
  const [activeStep, setActiveStep] = useState(1);

  /* ================= STEP 1 ================= */
  const [clientInfo, setClientInfo] = useState({
    client: "",
    deliveredBy: "",
    remark: "",
  });

  const [billing, setBilling] = useState({ ...emptyAddress });
  const [shipping, setShipping] = useState({ ...emptyAddress });

  const copyBillingToShipping = () => {
    setShipping({ ...billing });
  };

  /* ================= STEP 2 ================= */
  const [orders, setOrders] = useState([]);

  const addProduct = () => {
    setOrders([...orders, { ...emptyOrderRow }]);
  };

  const handleOrderChange = (index, field, value) => {
    const updated = [...orders];
    updated[index][field] = value;
    setOrders(updated);
  };

  const handleDelete = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  /* ================= RENDER ================= */
  return (
    <Row>
      <Col sm="12">
        <Card>
          {/* HEADER */}
          <Card.Header>
            <h4>Order (Draft)</h4>
            <div className="d-flex gap-2 mt-2">
              <Button
                size="sm"
                variant={activeStep === 1 ? "primary" : "outline-primary"}
                onClick={() => setActiveStep(1)}
              >
                Step 1
              </Button>
              <Button
                size="sm"
                variant={activeStep === 2 ? "primary" : "outline-primary"}
                onClick={() => setActiveStep(2)}
              >
                Step 2
              </Button>
            </div>
          </Card.Header>

          <Card.Body>
            {/* ================= STEP 1 ================= */}
            {activeStep === 1 && (
              <>
                {/* Client / Delivered / Remark */}
                <Row className="mb-4">
                  <Col md={4}>
                    <Form.Label>Client</Form.Label>
                    <Form.Control
                      value={clientInfo.client}
                      onChange={(e) =>
                        setClientInfo({ ...clientInfo, client: e.target.value })
                      }
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label>Delivered By</Form.Label>
                    <Form.Control
                      value={clientInfo.deliveredBy}
                      onChange={(e) =>
                        setClientInfo({
                          ...clientInfo,
                          deliveredBy: e.target.value,
                        })
                      }
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label>Remark</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={clientInfo.remark}
                      onChange={(e) =>
                        setClientInfo({ ...clientInfo, remark: e.target.value })
                      }
                    />
                  </Col>
                </Row>

                {/* Address Renderer */}
                {[
                  ["Billing Address", billing, setBilling],
                  ["Shipping Address", shipping, setShipping],
                ].map(([title, data, setter], idx) => (
                  <div key={title} className="mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6>{title}</h6>
                      {idx === 1 && (
                        <Button size="sm" onClick={copyBillingToShipping}>
                          Click here - same as above billing address
                        </Button>
                      )}
                    </div>

                    <Row className="mt-2">
                      {Object.keys(emptyAddress).map((key) => (
                        <Col md={4} className="mb-2" key={key}>
                          <Form.Label className="text-capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </Form.Label>
                          <Form.Control
                            value={data[key]}
                            onChange={(e) =>
                              setter({ ...data, [key]: e.target.value })
                            }
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                ))}
              </>
            )}

            {/* ================= STEP 2 ================= */}
            {activeStep === 2 && (
              <>
                <div className="d-flex justify-content-between mb-2">
                  <h6>Add Order</h6>
                  <Button size="sm" onClick={addProduct}>
                    Add New Product
                  </Button>
                </div>

                <Table bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Select</th>
                      <th>Product</th>
                      <th>Prod Code</th>
                      <th>Pack</th>
                      <th>Batch No</th>
                      <th>MFG/Start Date</th>
                      <th>EXP/End Date</th>
                      <th>MRP</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Tax Details</th>
                      <th>Discount</th>
                      <th>Total Quantity</th>
                      <th>Discount Amount</th>
                      <th>Amount (A)</th>
                      <th>Tax (B)</th>
                      <th>Total (A+B)</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((row, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        {Object.keys(emptyOrderRow).map((field) => (
                          <td key={field}>
                            <Form.Control
                              value={row[field]}
                              onChange={(e) =>
                                handleOrderChange(i, field, e.target.value)
                              }
                            />
                          </td>
                        ))}
                        <td>
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={() => handleDelete(i)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}

                    {orders.length === 0 && (
                      <tr>
                        <td colSpan="18" className="text-center">
                          No products added yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
AddOrderPage.layout = "accounting";
export default AddOrderPage;