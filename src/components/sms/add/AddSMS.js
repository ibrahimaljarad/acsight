import React, { Fragment, useEffect, useState, Component } from "react";
import axios from "axios";
import Select from "react-select";

import { useSelector, useDispatch } from "react-redux";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";

import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

function AddSMS(props) {
  const ProviderID = [
    {
      value: 1,
      label: "User",
    },
    {
      value: 0,
      label: "Group",
    },
  ];

  const [formState, setFormState] = useState({
    ID: 0,
    ProviderID: null,
    PartnerID: 5,
    BaseURL: "",
    FromName: "  ",
    Username: "",
    Password: " ",
  });

  const dispatch = useDispatch();
  const store = useSelector((state) => state.users);

  const onSubmit = async () => {
    await axios
      .post(
        `http://c4f2.acsight.com:7770/api/system/add-partner-sms-provider`,
        {
          ProviderID: formState.ProviderID,
          ID: formState.ID,

          PartnerID: formState.PartnerID,
          BaseURL: formState.BaseURL,
          FromName: formState.FromName,
          Username: formState.Username,
          Password: formState.Password,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          // history.goBack();
        }
      })
      .catch(() => {});
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">
          <ArrowLeft cursor="pointer" />
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Go Back
          </Link>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col sm="12">
              <FormGroup>
                <Label for="BaseURL">Base URL</Label>
                <Input
                  autoFocus
                  type="text"
                  name="BaseURL"
                  id="BaseURL"
                  placeholder="BaseURL..."
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="FromName">From</Label>
                <Input
                  autoFocus
                  type="text"
                  name="FromName"
                  id="FromName"
                  placeholder="FromName..."
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </FormGroup>
            </Col>
            <Col sm="12" className="pb-2">
              <CardBody className="p-0">
                <FormGroup>
                  <Label for="templateContent">
                    User Name
                    <span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="text"
                    autoFocus
                    name="Username"
                    id="Username"
                    placeholder="Username..."
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </FormGroup>
              </CardBody>
            </Col>
            <Col sm="12" className="pb-2">
              <CardBody className="p-0">
                <FormGroup>
                  <Label for="Password">
                    Password
                    <span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="text"
                    autoFocus
                    name="Password"
                    id="Password"
                    placeholder="Password..."
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </FormGroup>
              </CardBody>
            </Col>
            <Col sm="12" className="pb-2">
              <CardBody className="p-0">
                <FormGroup>
                  <Label for="List Type">
                    provider id : <span className="text-danger">*</span>
                  </Label>
                  <Select
                    required
                    className="react-select"
                    classNamePrefix="select"
                    options={ProviderID}
                    isClearable={false}
                    name="List Type"
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        ProviderID: e.value,
                      })
                    }
                  />
                </FormGroup>
              </CardBody>
            </Col>
            <Col sm="12">
              <FormGroup className="d-flex mb-0">
                <Button
                  className="mr-1"
                  color="primary"
                  type="submit"
                  onClick={onSubmit}
                >
                  Create
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
}

export default AddSMS;
