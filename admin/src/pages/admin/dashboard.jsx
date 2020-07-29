import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { Context } from "../../data/context";

const Dashboard = () => {
  const { role } = useContext(Context);
  const history = useHistory();

  if (role !== "admin") {
    return (
      <div>
        <h1>You are not supposed to be here</h1>
      </div>
    );
  }
  return (
    <Container>
      <Row className="mt-5">
        <Col
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Col
            onClick={() => history.push("/admin/reports")}
            className="addHoverEffect"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={require("../../images/view-report.png")} rounded />
            <h5 style={{ textAlign: "center" }}>View Reports</h5>
          </Col>

          <Col
            onClick={() => history.push("/admin/reportByLocation")}
            className="addHoverEffect"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={require("../../images/location.png")} rounded />
            <h5 style={{ textAlign: "center" }}>View Reports By Region</h5>
          </Col>

          <Col
            onClick={() => history.push("/admin/organization")}
            className="addHoverEffect"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={require("../../images/company.png")} rounded />
            <h5 style={{ textAlign: "center" }}>Edit Organization</h5>
          </Col>

          <Col
            onClick={() => history.push("/admin/users")}
            className="addHoverEffect"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={require("../../images/users.png")} rounded />
            <h5 style={{ textAlign: "center" }}>Manage Users</h5>
          </Col>

          <Col
            onClick={() => history.push("/profile")}
            className="addHoverEffect"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={require("../../images/admin.png")} rounded />
            <h5 style={{ textAlign: "center" }}>Edit Profile</h5>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
