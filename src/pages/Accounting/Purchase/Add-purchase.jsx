"use client";

import { useState, Fragment } from "react";
import { Row, Col, Table, Button, Form } from "react-bootstrap";
import Card from "@/components/bootstrap/card";

export default function AddPurchasePage() {
  const emptyRow = {
    client: "",
    billDate: "",
    billNumber: "",
    product: "",
    pack: "",
    mfgDate: "",
    expDate: "",
    batchNo: "",
    hsn: "",
    quantity: "",
    mrp: "",
    ptr: "",
    price: "",
    pts: "",
    discount: "",
    gst: "",
    totalSgst: "",
    totalCgst: "",
    totalQuantity: "",
    totalGst: "",
    totalAmount: "",
    total: "",
  };

  const [rows, setRows] = useState([emptyRow]);

  const handleChange = (i, field, value) => {
    const updated = [...rows];
    updated[i][field] = value;
    setRows(updated);
  };

  const addRow = () => setRows([...rows, { ...emptyRow }]);
  const deleteRow = (i) => setRows(rows.filter((_, idx) => idx !== i));

  return (
    <Row>
      <Col sm="12">
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Add Purchase</h5>
            <Button size="sm" onClick={addRow}>
              Add Product
            </Button>
          </Card.Header>

          <Card.Body>
            <div className="table-responsive">
              <Table bordered size="sm" className="align-middle">
                <tbody>
                  {rows.map((row, index) => (
                    <Fragment key={index}>
                      {/* Row 1 */}
                      <tr>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="Client"
                            value={row.client}
                            onChange={(e) =>
                              handleChange(index, "client", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Group>
                            <Form.Label className="small mb-1">Bill Date</Form.Label>
                            <Form.Control
                              type="date"
                              size="sm"
                              value={row.billDate}
                              onChange={(e) =>
                                handleChange(index, "billDate", e.target.value)
                              }
                            />
                          </Form.Group>

                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="Bill No"
                            value={row.billNumber}
                            onChange={(e) =>
                              handleChange(index, "billNumber", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="Product"
                            value={row.product}
                            onChange={(e) =>
                              handleChange(index, "product", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="Pack"
                            value={row.pack}
                            onChange={(e) =>
                              handleChange(index, "pack", e.target.value)
                            }
                          />
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr>
                        <td>
                          <Form.Group>
                            <Form.Label className="small mb-1">MFG Date</Form.Label>
                            <Form.Control
                              type="date"
                              size="sm"
                              value={row.mfgDate}
                              onChange={(e) =>
                                handleChange(index, "mfgDate", e.target.value)
                              }
                            />
                          </Form.Group>

                        </td>
                        <td>
                          <Form.Group>
                            <Form.Label className="small mb-1">EXP Date</Form.Label>
                            <Form.Control
                              type="date"
                              size="sm"
                              value={row.expDate}
                              onChange={(e) =>
                                handleChange(index, "expDate", e.target.value)
                              }
                            />
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="Batch No"
                            value={row.batchNo}
                            onChange={(e) =>
                              handleChange(index, "batchNo", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="HSN"
                            value={row.hsn}
                            onChange={(e) =>
                              handleChange(index, "hsn", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="Quantity"
                            value={row.quantity}
                            onChange={(e) =>
                              handleChange(index, "quantity", e.target.value)
                            }
                          />
                        </td>
                      </tr>

                      {/* Row 3 */}
                      <tr>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="MRP"
                            value={row.mrp}
                            onChange={(e) =>
                              handleChange(index, "mrp", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="PTR"
                            value={row.ptr}
                            onChange={(e) =>
                              handleChange(index, "ptr", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="Price"
                            value={row.price}
                            onChange={(e) =>
                              handleChange(index, "price", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="PTS"
                            value={row.pts}
                            onChange={(e) =>
                              handleChange(index, "pts", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="Discount"
                            value={row.discount}
                            onChange={(e) =>
                              handleChange(index, "discount", e.target.value)
                            }
                          />
                        </td>
                      </tr>

                      {/* Row 4 */}
                      <tr>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="GST"
                            value={row.gst}
                            onChange={(e) =>
                              handleChange(index, "gst", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="SGST"
                            value={row.totalSgst}
                            onChange={(e) =>
                              handleChange(index, "totalSgst", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="CGST"
                            value={row.totalCgst}
                            onChange={(e) =>
                              handleChange(index, "totalCgst", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="Total Qty"
                            value={row.totalQuantity}
                            onChange={(e) =>
                              handleChange(index, "totalQuantity", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            placeholder="Total"
                            value={row.total}
                            onChange={(e) =>
                              handleChange(index, "total", e.target.value)
                            }
                          />
                        </td>
                      </tr>

                      {/* Row 5 */}
                      <tr>
                        <td colSpan={3}>
                          <Form.Control
                            size="sm"
                            placeholder="Total GST"
                            value={row.totalGst}
                            onChange={(e) =>
                              handleChange(index, "totalGst", e.target.value)
                            }
                          />
                        </td>
                        <td colSpan={1}>
                          <Form.Control
                            size="sm"
                            placeholder="Total Amount"
                            value={row.totalAmount}
                            onChange={(e) =>
                              handleChange(index, "totalAmount", e.target.value)
                            }
                          />
                        </td>
                        <td className="text-end">
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => deleteRow(index)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    </Fragment>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
