import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Card, CardTitle, CardBody, ListGroupItemHeading } from 'reactstrap';
function NewItemForm({ add, type, setLoading }) {
    const [formData, setFormData] = useState({ name: "", description: "", recipe: "", serve: "" });
    const history = useHistory();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(fData => ({ ...fData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        add(formData);
        setLoading();
        history.push(`/${type}s`);
    }

    return (
        <Card>
            <CardBody>
                <CardTitle>
                    <h3>New {type}</h3>
                </CardTitle>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name: </Label>
                        <Input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            placeholder={`${type} name`} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description: </Label>
                        <Input
                            onChange={handleChange}
                            type="text"
                            name="description"
                            id="description"
                            value={formData.description}
                            placeholder={`${type} description`} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="recipe">Recipe: </Label>
                        <Input
                            onChange={handleChange}
                            type="text"
                            name="recipe"
                            id="recipe"
                            value={formData.recipe}
                            placeholder={`${type} recipe`} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="serve">Serving Instructions: </Label>
                        <Input
                            onChange={handleChange}
                            type="text"
                            name="serve"
                            id="serve"
                            value={formData.serve}
                            placeholder={`${type} serving info`} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </CardBody>
        </Card>
    )

}

export default NewItemForm;