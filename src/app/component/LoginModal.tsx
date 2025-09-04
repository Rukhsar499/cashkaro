"use client";

import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Image from "next/image";

export default function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Trigger Button */}
     
        <Image
          src="/assets/img/account_circle.svg"
          alt="Login Icon"
          width={30}
          height={30}
          className="me-2"
          onClick={handleShow}
        />
      
     

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg" contentClassName="login-modal">
        <button className="btn-close-custom" onClick={handleClose}>
          ✕
        </button>
        <div className="d-flex">
          {/* Left Side Image */}
          <div className="login-left">
            <Image
              src="/assets/img/login-img.png" // 👈 apni image ka path daalo
              alt="Login Banner"
              width={350}
              height={400}
              className="img-fluid h-100 w-100 object-fit-cover"
            />
          </div>

          {/* Right Side Form */}
          <div className="login-right p-4 d-flex flex-column justify-content-center">
            <h4 className=" text-success regis">Login Now!</h4>
            <hr className="green-line" />
            

            <Form>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Control type="text" placeholder="Enter phone number" />
              </Form.Group>
              <p className="text-muted small mt-3">
            
              By continuing, you agree to Beyuvana’s Terms of use and Privacy Policy.
            </p>
              <Button
                type="submit"
                className="w-100"
                style={{ backgroundColor: "#2CA24C", border: "none" }}
              >
                Continue
              </Button>
            </Form>
           
          </div>
        </div>
      </Modal>
    </>
  );
}
