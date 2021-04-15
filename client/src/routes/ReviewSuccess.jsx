import React, { useEffect, useState } from "react";
import { CheckCircle } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";

const ReviewSuccess = () => {

    return (
        <>
        <TopNavBar />
        <Container>
            <div align="center">
            <h1>Thank you for your feedback!</h1>
            <p style={{ fontSize: "24px" }}>It really means a lot to us!</p>
            <br />
            <CheckCircle size={100} color="forestgreen"/>
            </div>
        </Container>
        </>
    )
}

export default ReviewSuccess;