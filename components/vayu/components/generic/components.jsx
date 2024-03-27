import React, { lazy } from "react";
import Loader from "./Loader";

const InputAge = lazy(() => import("../form/InputAge"));
const InputCheckbox = lazy(() => import("../form/InputCheckbox"));
const InputEmail = lazy(() => import("../inputComponents/InputEmail"));
// const InputImage = lazy(() => import("../form/InputImage"));
const InputName = lazy(() => import("../form/InputName"));
const InputPhoneNumber = lazy(() => import("../form/InputPhoneNumber"));
const InputPhoneNumberV2 = lazy(() => import("../form/InputPhoneNumberV2"));
const InputRadio = lazy(() => import("../form/InputRadio"));
const InputSelect = lazy(() => import("../form/InputSelect"));
const InputSlotsV4 = lazy(() => import("../v4/InputSlots"));
const InputRadioV4 = lazy(() => import("../v4/InputRadio"));
const InputRadioV2 = lazy(() => import("../v4/InputRadioV2"));
const InputAgeV4 = lazy(() => import("../v4/InputAge"));
const InputCheckboxV4 = lazy(() => import("../v4/InputCheckbox"));

const _components = {
  inputAge: InputAge,
  inputCheckbox: InputCheckbox,
  inputEmail: InputEmail,
  // inputImage: InputImage,
  inputName: InputName,
  inputPhoneNumber: InputPhoneNumber,
  inputRadio: InputRadio,
  inputSelect: InputSelect,
  inputSlotsV4: InputSlotsV4,
  inputRadioV4: InputRadioV4,
  inputRadioV2: InputRadioV2,
  inputAgeV4: InputAgeV4,
  inputCheckboxV4: InputCheckboxV4,
  // miniInputSlots: InputSlotsV2,
  InputPhoneNumberV2: InputPhoneNumberV2,
};

const components = (block, context, handler, error) => {
  if (typeof _components[block.component] !== "undefined") {
    return React.createElement(_components[block.component], {
      key: block.id,
      block: block,
      context: context,
      handler: handler,
      error: error,
    });
  }

  return React.createElement(
    () => (
      <div>
        <Loader />
      </div>
    ),
    { key: block.id }
  );
};

export default components;
