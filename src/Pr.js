import React from "react";
import {Table, Container} from 'react-bootstrap';


export const Pr = () => (
  
      
   <Container>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Nazwa przedmiotu</th>
      <th>ocena</th>
      <th>Prowadzący</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Aplikacje webowe dla urządzeń mobilnych [lab]</td>
      <td>4</td>
      <td>dr Dariusz Kralewski</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Programowanie aplikacji formatkowych [lab]</td>
      <td>4</td>
      <td>dr Dariusz Kralewski</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Projektowanie sieci LAN [lab]</td>
      <td>dr Marek Markowski</td>
    </tr>
  </tbody>
</Table>
</Container>
)