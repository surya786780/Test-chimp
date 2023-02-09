import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Field, Formik } from "formik";

function TextFields({ label, helperText }) {
  const [err, setErr] = useState(0);

  return (
    <div>
      <Formik>
        {(formik) => {
          <form onSubmit={formik.handleSubmit}>
            <Field>
              {(fieldProps) => {
                <TextField
                  fullWidth
                  label={`${label}`}
                  id="outlined-error-helper-text fullWidth"
                  helperText={err == 1 ? `${helperText}` : ""}
                  error={err == 1 ? "error" : ""}
                  {...fieldProps}
                />;
              }}
            </Field>
          </form>;
        }}
      </Formik>
    </div>
  );
}

export default TextFields;
