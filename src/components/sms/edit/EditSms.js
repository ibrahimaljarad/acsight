import React, { Fragment, useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  FormFeedback,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";
import Select from "react-select";

import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EditSms = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
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
  const Status = [
    {
      value: 1,
      label: " true",
    },
    {
      value: 0,
      label: "false",
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
    Status: false,
  });

  const toggleStatus = () => {
    axios
      .post(
        `http://c4f2.acsight.com:7770/api/system/change-stat-partner-sms-provider?id=${id}`
      )
      .then((response) => {
        if (response.status === 200) {
          console.log("yes", response);
        }
      });
  };

  const onSubmit = async () => {
    await axios
      .post(
        `http://c4f2.acsight.com:7770/api/system/update-partner-sms-provider`,
        {
          ProviderID: formState.ProviderID,
          ID: id,
          PartnerID: formState.PartnerID,
          BaseURL: formState.BaseURL,
          FromName: formState.FromName,
          Username: formState.Username,
          Password: formState.Password,
          Status: formState.status,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log("YES");
        }
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="w-100">
      <Card>
        <CardBody>
          <Row>
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
                <Col sm="12" className="pb-2">
                  <CardBody className="p-0">
                    <FormGroup>
                      <Label for="Status">
                        Status : <span className="text-danger">*</span>
                      </Label>
                      <Select
                        required
                        className="react-select"
                        classNamePrefix="select"
                        options={Status}
                        isClearable={false}
                        name="List Type"
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            Status: e.value,
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
                      create
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
            <Col sm="12">
              <FormGroup className="d-flex mb-0">
                <Button
                  className="mr-1"
                  color="primary"
                  type="submit"
                  onClick={toggleStatus}
                >
                  Toggle status
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default EditSms;
