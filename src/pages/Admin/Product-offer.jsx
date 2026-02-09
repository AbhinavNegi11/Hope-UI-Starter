"use client";

import { useState, useEffect, useRef } from "react";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import DataTable from "@/components/DataTable";

const ProductOffer = () => {
  
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({ mrp: "", pts: "", ptr: "" });
    const [productList, setproductList] = useState([
        {
            name: "Detols (det001)",
            batchCode: "BH001",
            mrp: "85",
            price: "",
            pts: "65",
            ptr: "70",
            mfgDate: "07/01/2020",
            expDate: "14/08/2021",
            pack: "10 tab",
            qty: "400",
            stock: "400"
        },
    ]);

    
    const handleEdit = (index) => {
        setEditIndex(index);
        const item = productList[index];
        setFormData({ 
            mrp: item.mrp || "", 
            pts: item.pts || "", 
            ptr: item.ptr || "" 
        });
    };

    
    useEffect(() => {
        const handleEditEvent = (e) => handleEdit(e.detail);
        window.addEventListener("editItem", handleEditEvent);
        return () => window.removeEventListener("editItem", handleEditEvent);
    }, [productList]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedList = [...productList];
        
        if (editIndex !== null) {
           
            updatedList[editIndex] = { ...updatedList[editIndex], ...formData };
            setList(updatedList);
            setEditIndex(null);
        } else {
            
            updatedList.push({
                name: "New Item",
                batchCode: "---",
                ...formData,
                mfgDate: "-",
                expDate: "-",
                pack: "-",
                qty: "0",
                stock: "0"
            });
            setInventoryList(updatedList);
        }
        setFormData({ mrp: "", pts: "", ptr: "" });
    };

    const handleReset = () => {
        setFormData({ mrp: "", pts: "", ptr: "" });
        setEditIndex(null);
    };

   
    const DataTableOptions = {
        columns: [
            { title: "Name" }, { title: "Batch Code" }, { title: "MRP" }, 
            { title: "PRICE" }, { title: "PTS" }, { title: "PTR" }, 
            { title: "MFG / START Date" }, { title: "EXP / END Date" }, 
            { title: "Pack" }, { title: "Qut" }, { title: "Stock" }, { title: "Action" },
        ],
        data: productList.map((item, index) => [
            item.name, item.batchCode, item.mrp, item.price, item.pts, item.ptr,
            item.mfgDate, item.expDate, item.pack, item.qty, item.stock,
            `<button class="btn btn-sm btn-outline-secondary py-0 border shadow-sm" onclick="window.dispatchEvent(new CustomEvent('editItem', {detail: ${index}}))">Edit</button>`
        ]),
    };

    return (
        <div className="p-4 bg-white min-vh-100">
            <h5 className="text-center mb-5 text-secondary fw-light">Inventory</h5>

            <Row className="gx-5 mt-2">
                
                <Col md={2}>
                    <Card className="border shadow-sm rounded-1">
                        <Card.Header className="bg-light py-2 border-bottom">
                            <span className="small text-muted fw-bold">Inventory Details</span>
                        </Card.Header>
                        <Card.Body className="p-3 bg-white">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="small text-muted mb-1">MRP :-</Form.Label>
                                    <Form.Control 
                                        name="mrp" size="sm" value={formData.mrp} 
                                        onChange={handleChange} className="rounded-1 border"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="small text-muted mb-1">PTS :-</Form.Label>
                                    <Form.Control 
                                        name="pts" size="sm" value={formData.pts} 
                                        onChange={handleChange} className="rounded-1 border"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label className="small text-muted mb-1">PTR :-</Form.Label>
                                    <Form.Control 
                                        name="ptr" size="sm" value={formData.ptr} 
                                        onChange={handleChange} className="rounded-1 border"
                                    />
                                </Form.Group>
                                <Button type="submit" className="w-100 mb-2 py-2 border-0 fw-bold" style={{backgroundColor: '#40c97e'}}>
                                    {editIndex !== null ? 'Update' : 'Submit'}
                                </Button>
                                <Button onClick={handleReset} className="w-100 py-2 border-0 fw-bold" style={{backgroundColor: '#ff6b6b'}}>
                                    Reset
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                
                <Col md={10}>
                    <div className="d-flex justify-content-end mb-2">
                        <Button variant="light" size="sm" className="border shadow-sm px-3">Download</Button>
                    </div>
                    
                    <div className="table-container border rounded bg-white shadow-sm overflow-hidden">
                       
                        <DataTable
                            key={productList.length}
                            className="table table-hover mb-0 align-middle text-center small"
                            columns={DataTableOptions.columns}
                            data={DataTableOptions.data}
                        />
                    </div>
                </Col>
            </Row>

            <style jsx>{`
                .form-control { border-color: #ced4da !important; font-size: 13px; }
                .table-container :global(.dataTables_wrapper .dataTables_filter) { margin-bottom: 10px; }
                .table-container :global(.dataTables_wrapper .dataTables_info) { font-size: 12px; color: #6c757d; }
            `}</style>
        </div>
    );
};

ProductOffer.layout = "admin";
export default ProductOffer;