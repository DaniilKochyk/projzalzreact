import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { Button, ButtonGroup, Container, Table } from "react-bootstrap";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export function About() {
  const [newName, setNewName] = useState("");
  const [newmark, setNewmark] = useState(0);

  const [marks, setMarks] = useState([]);
  const marksCollectionRef = collection(db, "marks");

  const createmark = async () => {
    await addDoc(marksCollectionRef, { name: newName, mark: Number(newmark) });
  };

  const updateMark = async (id, mark) => {
    const markDoc = doc(db, "marks", id);
    const newFields = { mark: mark + 1 };
    await updateDoc(markDoc, newFields);
  };
  const updateMarkmin = async (id, mark) => {
    const markDoc = doc(db, "marks", id);
    const newFields = { mark: mark - 1 };
    await updateDoc(markDoc, newFields);
  };

  const deleteMark = async (id) => {
    const markDoc = doc(db, "marks", id);
    await deleteDoc(markDoc);
  };

  useEffect(() => {
    const getmarks = async () => {
      const data = await getDocs(marksCollectionRef);
      setMarks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getmarks();
  }, []);

  return (
     
    <div className="App"> <Container className="mt-3">
      <input
        placeholder="Przedmiot..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input 
        type="number"
        placeholder="ocena..."
        onChange={(event) => {
          setNewmark(event.target.value);
        }}
      />
      </Container>
<div className="btn_container">
      <Button className="btn btn-primary mt-3" onClick={createmark}> Dodać ocenę</Button>
      </div>
      {marks.map((mark) => {
        return (
          <div>
            {" "}
            <Container>
                <Table striped bordered hover variant="dark" className="mt-3">
                    <thead>
                    <tr>
            <th>Przedmiot:</th>
            <th>Ocena:</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <th>{mark.name}</th>
            <th>{mark.mark}</th>
            </tr>  
            </tbody>
            <ButtonGroup gap={2} className="col-md-5 mx-auto">
            <Button className="btn btn-success"
              onClick={() => {
                updateMark(mark.id, mark.mark);
              }}
            >
                
              {" "}
              Podwyzszyć ocenę
            </Button>
            <Button className="btn btn-warning"
              onClick={() => {
                updateMarkmin(mark.id, mark.mark);
              }}
            >Podnizszyc ocenę</Button>
            <Button className="btn btn-danger " 
              onClick={() => {
                deleteMark(mark.id);
              }}
            >
              {" "}
              Usunąć ocenę
            </Button>
            </ButtonGroup>
            </Table>
            
            </Container>
          </div>
        );
      })}
    </div>
    
  );
}

