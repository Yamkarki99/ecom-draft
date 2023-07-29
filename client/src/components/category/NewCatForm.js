import React from "react";
import { Button } from "react-bootstrap";
import col from "react-bootstrap/col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const NewCatForm = () => {
  const nameRef = useRef();
  const handleOnAddCat = () => {
    const { value } = nameRef.current;
    console.log(value);
    nameRef.current.value = "test";
  };
  return (
    <div className="boreder p-4 rounded shadow-lg">
      <Row></Row>
    </div>
  );
};
