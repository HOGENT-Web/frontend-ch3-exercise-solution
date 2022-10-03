import React, { useCallback } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

const validationRequiredRule = {
  required: 'this is required',
};

const LabelInput = ({ label, type, defaultValue, validation, ...rest }) => {
  const { register, errors } = useFormContext();

  return (
    <div className="form-group mb-4">
      <label htmlFor={label}>{label}</label>
      <input
        {...register(label, validation)}
        defaultValue={defaultValue}
        placeholder={label}
        type={type}
        id={label}
        name={label}
        className="form-control"
        {...rest}
      />
      {errors[label] && <small className="form-text text-danger">{errors[label].message}</small>}
    </div>
  );
};

export default function BreedForm({ saveBreed = f => f }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = useCallback((data) => {
    saveBreed(data);
    reset();
  }, [reset, saveBreed]);

  return (
    <>
      <h2>Add a breed</h2>
      <FormProvider register={register} errors={errors}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LabelInput
            label="name"
            type="text"
            defaultValue=""
            validation={validationRequiredRule}
          />
          <div className="form-group mb-4">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              {...register('description')} />
          </div>
          <LabelInput
            label="imageUrl"
            type="url"
          />
          <LabelInput
            label="origin"
            type="text"
            defaultValue=""
            validation={validationRequiredRule}
          />
          <LabelInput
            label="lifespan"
            type="text"
            defaultValue=""
            validation={validationRequiredRule} />
          <LabelInput
            label="weight"
            type="text"
            defaultValue=""
            validation={validationRequiredRule}
          />
          <LabelInput
            label="temperament"
            type="text"
            defaultValue=""
            validation={validationRequiredRule}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </FormProvider>
    </>
  )
}
