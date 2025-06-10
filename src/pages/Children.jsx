import Button from "../components/Button";
import Form from "../components/Form";

export default function Children() {
  return (
    <>
      <Form title="Login Form">
        <label>Username</label><br></br>
        <input placeholder="Input username" className="w-full block border p-2"></input><br></br>
        <label>Password</label><br></br>
        <input placeholder="Input password" className="w-full block border p-2"></input><br></br>
      </Form>

      <Form title="Signup Form">
        <label>Full Name</label><br></br>
        <input placeholder="Input full name" className="w-full block border p-2"></input><br></br>
        <label>Contact</label><br></br>
        <input placeholder="Input contact" className="w-full block border p-2"></input><br></br>
        <label>Address</label><br></br>
        <input placeholder="Input address" className="w-full block border p-2"></input><br></br>
        <label>Username</label><br></br>
        <input placeholder="Input username" className="w-full block border p-2"></input><br></br>
        <label>Password</label><br></br>
        <input placeholder="Input password" className="w-full block border p-2"></input><br></br>
      </Form>
    </>
  )
}
