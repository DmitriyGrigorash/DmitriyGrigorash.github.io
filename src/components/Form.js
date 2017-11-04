import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, RaisedButton, RadioButton, MenuItem, SelectField } from 'material-ui';
import { RadioButtonGroup } from 'redux-form-material-ui'

import { COUNTRIES } from '../const';
import validate from '../utils/validate';

const renderTextField = ({
         input,
         label,
         meta: { touched, error },
         ...custom
     }) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
);

const renderRadioGroup = ({ input, ...rest }) => (
    <RadioButtonGroup
        {...input}
        {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
    />
);

const renderSelectField = ({
           input,
           label,
           meta: { touched, error },
           children,
           ...custom
       }) => (
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
    />
);



let Form = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <Field
                    name="username"
                    component={renderTextField}
                    label="User Name"
                />
            </div>
            <div>
                <Field
                    name="country"
                    component={renderSelectField}
                    label="Country"
                >
                    {COUNTRIES.map((item, k) => (
                        <MenuItem value={item.code} primaryText={item.name} key={k}/>
                    ))}
                </Field>
            </div>
            <div>
                <Field name="gender" component={renderRadioGroup}>
                    <RadioButton value="male" label="male" />
                    <RadioButton value="female" label="female" />
                </Field>
            </div>
            <div>
                <Field
                    name="age"
                    component={renderTextField}
                    label="Age"
                    type="number"
                />
            </div>
            <RaisedButton label="Send" primary={true} type="submit" />
        </form>
    )
};

Form = reduxForm({
    form: 'Contact',
    validate,
})(Form);

export default Form;
