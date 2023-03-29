import Container from "react-bootstrap/Container";
let today = new Date();

function MyFooter() {
  return (
    <Container className="footer mt-4 w-100">
      <div className="p-5 bg-danger text-white rounded">
        <ul className="d-flex justify-content-between">
          <li>Contatti</li>
          <li>About us</li>
          <li>Spedizioni</li>
        </ul>
        <p className="text-center">{today.getFullYear()} - Mondadori</p>
      </div>
    </Container>
  );
}

export default MyFooter;
