import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  Button,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';
import CheckboxGroup from './CheckBoxGroup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  country: Yup.string().required('Country is required'),
  gender: Yup.string().required('Gender is required'),
  hobbies: Yup.array().min(1, 'At least one hobby/interest must be selected'),
});

const useStyles = makeStyles((theme) => ({
  card: {
    margin: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    padding: '1rem', // Adjust the padding to decrease the card height
  },
  submitButton: {
    width: '100%',
    marginTop: '1rem',
  },
}));

const FormCard = () => {
  const classes = useStyles();

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

  return (
    <Container maxWidth="sm">
      <Card className={classes.card}>
        <CardContent>
          {/* <h1>User Authentication Form</h1> */}
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} justify="center">
              <Grid item xs={12}>
                <TextInput
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  error={formik.touched.name && formik.errors.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextAreaInput
                  name="address"
                  label="Address"
                  value={formik.values.address}
                  error={formik.touched.address && formik.errors.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="country-label">Country</InputLabel>
                  <Select
                    labelId="country-label"
                    id="country"
                    name="country"
                    value={formik.values.country}
                    error={formik.touched.country && formik.errors.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                    <MenuItem value="UK">UK</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    name="gender"
                    value={formik.values.gender}
                    error={formik.touched.gender && formik.errors.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <CheckboxGroup
                  name="hobbies"
                  label="Hobbies/Interests"
                  value={formik.values.hobbies}
                  error={formik.touched.hobbies && formik.errors.hobbies}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  options={[
                    { value: 'reading', label: 'Reading' },
                    { value: 'writing', label: 'Writing' },
                    { value: 'painting', label: 'Painting' },
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FormCard;
