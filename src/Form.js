import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@material-ui/core';
import FormCard from './Component/Formcard';
import TextInput from './Component/TextInput';
import TextAreaInput from './Component/TextAreaInput';
import Dropdown from './Component/Dropdown';
import RadioGroup from './Component/RadioGroup';
import CheckboxGroup from './Component/CheckBoxGroup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  country: Yup.string().required('Country is required'),
  gender: Yup.string().required('Gender is required'),
  hobbies: Yup.array().min(1, 'At least one hobby/interest must be selected'),
});

const Form = () => {
    
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      country: '',
      gender: '',
      hobbies: [],
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const countryOptions = [
    { label: 'Select Country', value: '' },
    { label: 'USA', value: 'usa' },
    { label: 'Canada', value: 'canada' },
    { label: 'UK', value: 'uk' },
  ];

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const hobbiesOptions = [
    { label: 'Reading', value: 'reading' },
    { label: 'Writing', value: 'writing' },
    { label: 'Painting', value: 'painting' },
  ];

  return (
    <FormCard>
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          label="Name"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextAreaInput
          label="Address"
          id="address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && formik.errors.address}
          helperText={formik.touched.address && formik.errors.address}
        />

        <Dropdown
          label="Country"
          id="country"
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          options={countryOptions}
          error={formik.touched.country && formik.errors.country}
        />

        <RadioGroup
          label="Gender"
          id="gender"
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          options={genderOptions}
          error={formik.touched.gender && formik.errors.gender}
        />

        <CheckboxGroup
          label="Hobbies/Interests"
          id="hobbies"
          name="hobbies"
          value={formik.values.hobbies}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          options={hobbiesOptions}
          error={formik.touched.hobbies && formik.errors.hobbies}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </FormCard>
  );
};

export default Form;
