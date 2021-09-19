import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "../formSchema";
import EditPlantForm from "./EditPlantForm";
import styled from 'styled-components';

const initialFormValues = {
    nickname: "",
    h2oInterval: 0,
    h2oAmount: "",
};

const initialFormErrors = {
    nickname: "",
    species: "",
    h2oInterval: "",
    image: "",
};

const plantList = [];
const initialDisabled = true;

export default function EditPlant() {
    /*eslint-disable-next-line */
    const [plants, setPlants] = useState(plantList);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    //VALIDATIONS =======================
    const validate = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then((valid) => {
                //eslint-disable-line
                setFormErrors({
                    ...formErrors,
                    [name]: "",
                });
            })
            .catch((err) => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0],
                });
            });
        setFormValues({ ...formValues, [name]: value })
    };

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues]);

    //CHANGE HANDLER =========================

    const inputChange = (name, value) => {
        validate(name, value);
        setFormValues({ ...formValues, [name]: value });
    };

    //SUBMIT HANDLER
    const formSubmit = () => {
        /*eslint-disable-next-line */
        const newPlant = {
            nickname: formValues.nickname.trim(),
            h2oInterval: formValues.h2oInterval,
            h2oAmount: formValues.h2oAmount.trim()
        }
        /*eslint-disable-next-line */
        const editPlant = {
            nickname: formValues.nickname.trim(),
            h2oInterval: formValues.h2oInterval,
            h2oAmount: formValues.h2oAmount.trim(),
        }


        // putNewPlant(editPlant);
    }


    return (
        <Container>
            <div>
                <EditPlantForm
                    values={formValues}
                    change={inputChange}
                    submit={formSubmit}
                    disabled={disabled}
                    errors={formErrors}
                    setValues={setFormValues}
                />
            </div>


        </Container>
    )

}



const Container = styled.div``;