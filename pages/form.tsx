import React from "react";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";

const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
const onSubmit = async (values: any) => {
  await sleep(300);
  if (values.username !== "erikras") {
    return { username: "Unknown username" };
  }
  if (values.password !== "finalformrocks") {
    return { [FORM_ERROR]: "Login Failed" };
  }
  window.alert("LOGIN SUCCESS!");
};

const _Form = () => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Required";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}
      render={({
        submitError,
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username">
            {({ input, meta }) => (
              <div>
                <label>Username</label>
                <input {...input} type="text" placeholder="Username" />
                {(meta.error || meta.submitError) && (
                  <span>{meta.error || meta.submitError}</span>
                )}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} type="password" placeholder="Password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          {submitError && <div className="error">{submitError}</div>}
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Log In
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );
};

export default _Form;
