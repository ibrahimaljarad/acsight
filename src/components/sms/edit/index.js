import React, { useState, useEffect } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import EditSms from "./EditSms";

const EditSMSTable = () => {
  return (
    <Row className="app-user-edit">
      <Col sm="12">
        <br />
        <Card>
          <CardBody className="pt-2">
            <EditSms />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default EditSMSTable;
