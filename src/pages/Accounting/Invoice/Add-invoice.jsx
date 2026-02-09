"use client";

import { useState } from "react";
import { Row, Col, Table, Button, Form, Stack } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Card from "@/components/bootstrap/card";

const AddInvoicePage=()=> {
  const router = useRouter();

  /* ---------------- Step 1 : Address ---------------- */
  const [address, setAddress] = useState({
    billingName: "",
    billingAddress: "",
    shippingName: "",
    shippingAddress: "",
  });

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  /* ---------------- Step 2 : Invoice Items ---------------- */
  const emptyItem = {
    select: "",
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
    amountA: "",
    taxB: "",
    total: "",
  };

  const [items, setItems] = useState([emptyItem]);

  const handleItemChange = (i, field, value) => {
    const updated = [...items];
    updated[i][field] = value;
    setItems(updated);
  };

  const addItem = () => setItems([...items, { ...emptyItem }]);
  const deleteItem = (i) => setItems(items.filter((_, idx) => idx !== i));
  const resetForm = () => setItems([emptyItem]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <Card className="mb-3">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Invoice</h5>

          <Stack direction="horizontal" gap={2}>
            <Button size="sm" variant="outline-secondary" onClick={() => router.push("/")}>
              Home
            </Button>
            <Button
              size="sm"
              variant="outline-primary"
              onClick={() => router.push("/accounting/invoice")}
            >
              Invoice List
            </Button>
            <Button size="sm" variant="outline-warning" onClick={resetForm}>
              Reset
            </Button>
            <Button size="sm" variant="outline-dark" onClick={() => router.back()}>
              Go Back
            </Button>
          </Stack>
        </Card.Body>
      </Card>

      {/* ================= INVOICE TABLE ================= */}
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Add Invoice</h6>
          <Button size="sm" onClick={addItem}>
            Add Item
          </Button>
        </Card.Header>

        <Card.Body className="table-responsive">
          <Table bordered size="sm" className="align-middle">
            <thead>
              <tr>
                <th>Select</th>
                <th>Product</th>
                <th>Prod Code</th>
                <th>Pack</th>
                <th>Batch No</th>
                <th>MFG</th>
                <th>EXP</th>
                <th>MRP</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Tax</th>
                <th>Discount</th>
                <th>Total Qty</th>
                <th>Disc Amt</th>
                <th>Amount (A)</th>
                <th>Tax (B)</th>
                <th>Total (A+B)</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  {Object.keys(item).slice(0, 17).map((key, idx) => (
                    <td key={idx}>
                      <Form.Control
                        type={key.includes("Date") ? "date" : "text"}
                        size="sm"
                        value={item[key]}
                        onChange={(e) =>
                          handleItemChange(i, key, e.target.value)
                        }
                      />
                    </td>
                  ))}

                  <td className="text-center">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteItem(i)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>

        {/* ================= FOOTER BUTTONS ================= */}
        <Card.Footer className="d-flex justify-content-end gap-2">
          <Button variant="success" size="sm">
            Save
          </Button>
          <Button variant="primary" size="sm" onClick={addItem}>
            Add
          </Button>
          <Button variant="secondary" size="sm" onClick={() => router.back()}>
            Cancel
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}
AddInvoicePage.layout = "accounting";
export default AddInvoicePage;