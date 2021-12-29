import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import {FloatingLabel, Form} from 'react-bootstrap'; 


function CustomTextField({label, typeForm}) {
    const { control } = useFormContext();

    return (
        <div>
            <FloatingLabel label={label}>
                <Controller 
                    as={Form.Control}
                    control={control}
                    type={typeForm}
                    />
            </FloatingLabel>

        </div>
    )
}

export default CustomTextField
