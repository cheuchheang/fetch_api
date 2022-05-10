import { Grid, Typography } from "@mui/material";
import React from "react";
import { Form, Field } from "react-final-form";
import styled from "styled-components";
import { Checkbox, Select, MenuItem } from "@mui/material";
import { Label } from "@mui/icons-material";

const LabelFeature = () => {
  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <Wrapper>
      <Form
        onSubmit={onSubmit}
        initialValues={{ font: "Arial", text: "Name", isLabelFeatures: true }}
        render={({ handleSubmit }) => {
          return (
            <>
              <StyledTypography>Point</StyledTypography>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>
                    <Field
                      name="isLabelFeatures"
                      component={isCheckBox}
                      type="checkbox"
                    />
                    Label Features
                  </label>
                </div>
                <div>
                  <label style={{ margin: "0px 0px 20px 10px" }}>Text:</label>

                  <Field name="text" component={textSelect} />
                </div>
                <div>
                  <label>Font:</label>
                  <Field name="font" component={fontSelect} />
                </div>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <button type="submit">send</button>
                  </Grid>
                </Grid>
              </form>
            </>
          );
        }}
      ></Form>
    </Wrapper>
  );
};

const isCheckBox = ({ input }: any) => {
  console.log();

  const handleChange = (e) => {
    const value = e.target.checked;
    input.onChange(value);
  };

  return (
    <>
      <Checkbox color="primary" checked={input.value} onChange={handleChange} />
    </>
  );
};

interface Props {
  name: string;
  isActive: boolean;
}

const textSelect = ({ input }: any) => {
  return (
    <>
      <Select value="Hello" {...input}>
        <MenuItem value="Name">Name</MenuItem>
        <MenuItem value="Age">Age</MenuItem>
        <MenuItem value="Address">Address</MenuItem>
      </Select>
    </>
  );
};

const fontSelect = ({ input }: any) => {
  return (
    <>
      <Select {...input}>
        <MenuItem value="Arial">Arial</MenuItem>
        <MenuItem value="Roboto">Roboto</MenuItem>
        <MenuItem value="Unicode">Unicode</MenuItem>
      </Select>
    </>
  );
};

export const StyledTypography = styled(Typography)`
  && {
    padding: 10px;
    font-size: 14px;
    text-decoration: underline;
    font-weight: bold;
  }
`;
export const Wrapper = styled.div`
  width: 330px;
`;

export default LabelFeature;
