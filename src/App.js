import {
  DropdownButton,
  Button,
  Container,
  Row,
  Col,
  Form,
  Navbar,
  Nav,
  Stack
} from "react-bootstrap";
import { logo } from "./data";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./styles.css";
const App = () => {
  const Header = () => (
    <Navbar bg="light">
      <img
        src={logo}
        width="160"
        height="50"
        className="d-inline-block align-top"
        alt="#"
      />
      <Container>
        <Nav>
          <Stack direction="horizontal" gap={3}>
            <Nav.Link href="#home">
              <p id="p">Proposal</p>
            </Nav.Link>
            <NavigateNextOutlinedIcon />
            <Navbar.Brand>Create Proposal </Navbar.Brand>
          </Stack>
        </Nav>
      </Container>
      <Stack direction="horizontal" gap={3}>
        <NotificationsOutlinedIcon />
        <AccountCircleIcon />
        <DropdownButton
          variant="outline-secondary"
          title="Hentry Wilson"
          id="input-group-dropdown-1"
        ></DropdownButton>
      </Stack>
    </Navbar>
  );
  return (
    <Stack gap={5}>
      <Header />
      <Container>
        <Row>
          <h6>Proposer Details</h6>
          <p style={{ color: "grey" }}>Star Women Care Policy</p>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name*</Form.Label>
              <Form.Control type="text" placeholder="Enter" />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="dateofbirth">
              <Form.Label>Date of Birth*</Form.Label>
              <Form.Control placeholder="DD/MM/YYYY" />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="mobile">
              <Form.Label>Mobile*</Form.Label>
              <Form.Control placeholder="Enter" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="occupation">
              <Form.Label>Occupation*</Form.Label>
              <Form.Select>
                <option>Select</option>
                <option>Default select</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="text" placeholder="Enter" />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Select>
                <option>Select</option>
                <option>Default select</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="annual">
              <Form.Label>Annaul Income*</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="gst">
              <Form.Label>GST Type</Form.Label>
              <Form.Control placeholder="Enter" />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="gstid">
              <Form.Label>
                GST ID Number
                <InfoOutlinedIcon fontSize="small" />
              </Form.Label>
              <Form.Control placeholder="Enter" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="nationality">
              <Form.Label>Nationality</Form.Label>
              <Form.Select>
                <option>Select</option>
                <option>Default select</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="aadhaar">
              <Form.Label>
                Enter the last 4 digits of Aadhaar Number{" "}
              </Form.Label>
              <Form.Control placeholder="Enter" />
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="reasons">
              <Form.Label>Reason for probability</Form.Label>
              <Form.Select>
                <option>Select</option>
                <option>Default select</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Stack direction="horizontal" gap={3}>
            <div className="bg-light ">
              <Button variant="outline-primary">Back</Button>
            </div>
            <div className="bg-light  ms-auto">
              <Button variant="outline-primary" disabled>
                save as draft
              </Button>
            </div>
            <div className="bg-light ">
              <Button
                style={{ "background-color": "darkblue", border: "darkblue" }}
              >
                Next
              </Button>
            </div>
          </Stack>
        </Row>
      </Container>
    </Stack>
  );
};

export default App;
