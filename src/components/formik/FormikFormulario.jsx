import React from "react"
import { Button, Grid, TextField, Typography } from "@mui/material"

import { useFormik } from "formik"
import * as Yup from "yup"


const FormikFormulario = () => {

    const enviarForm = (data) => {
      console.log(data)
    }

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "", 
      password: "",
    },
    onSubmit: enviarForm,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Lo siento, el nombre es requerido.").max(15, "El nombre es muy largo."),
      email: Yup.string().required("Ingrese un email."),
      password: Yup.string().required("La contraseña es obligatoria.").min(6, "La contraseña es muy debil.")
    }),
    validateOnChange: false
  })

  return (
    <div>
      <Typography color="primary" variant="h2" align="center">
        Formulario de registro
      </Typography>

      <form className="form-container" onSubmit={handleSubmit}>
        <Grid
          container
          alignItems={"center"}
          justifyContent="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={155} md={7}>
            <TextField
              type="text"
              label="Ingrese su nombre y apellido..."
              name="name"
              variant="outlined"
              fullWidth
              value={values.name}
              onChange={handleChange}
              helperText={errors.name}
              error={ errors.name ? true : false }
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingrese su email..."
              variant="outlined"
              fullWidth
              name="email"
              value={values.email}
              onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="password"
              label="Ingrese su contraseña..."
              variant="outlined"
              fullWidth
              name="password"
              value={values.password}
              onChange={handleChange}
                error={errors.password ? true : false}
                helperText={errors.password}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Comprar
        </Button>
      </form>
    </div>
  )
}

export default FormikFormulario
