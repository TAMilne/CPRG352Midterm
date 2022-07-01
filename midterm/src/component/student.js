import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  './grid.css';

const Student = () => {
    const cardInfo = [
        {
          image:"s1.png",
          name: "Mike",
          gpa: 3.8
        },
        {
          image: "s2.png",
            name: "Manal",
            gpa: 3.6
        },
        {
          image: "s3.png",
            name: "Moe",
            gpa: 3.2
        },
        {
          image: "s4.png",
            name: "Mary",
            gpa: 2.6
        }
      ];
    
      const renderCard = (student, index) => {
            return (
                <Card style={{ width: '18rem'}} key ={index} className="box">
                    <Card.Body>
                        <Card.Img src={student.image}/>
                        <Card.Subtitle>{student.name}</Card.Subtitle>
                        <Card.Text>{student.gpa}</Card.Text>
                        <Button>Grade</Button>
                    </Card.Body>
                </Card>
    );
};

    return <div className="grid">
        {cardInfo.map(renderCard)}
    </div>
}

export default Student;