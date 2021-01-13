import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, style }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} style = {style} onPress={handleSubmit} fontcolor="white"/>;
}

export default SubmitButton;
