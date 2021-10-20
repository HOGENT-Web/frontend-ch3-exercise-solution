import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form';

const validationRuleRequired = { required: 'this is required' };

export default function BreedForm({ saveBreed = f => f }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = useCallback((data) => {
    saveBreed(data);
    reset();
  }, [reset, saveBreed]);

  const LabelInput = ({ label, type, defaultValue, validation, ...rest }) => {
    return (
      <div className="form-group">
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

  return (
    <>
      <h2>Add a breed</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabelInput
          label="name"
          type="text"
          defaultValue=""
          validation={{ required: 'this is required' }}
        />
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            {...register('description')} />
        </div>
        <LabelInput
          label="imageUri"
          type="url"
          defaultValue=""
          validation={validationRuleRequired}
        />
        <LabelInput
          label="origin"
          type="text"
          defaultValue=""
          validation={validationRuleRequired}
        />
        <LabelInput
          label="lifespan"
          type="text"
          defaultValue=""
          validation={validationRuleRequired} />
        <LabelInput
          label="weight"
          type="text"
          defaultValue=""
          validation={validationRuleRequired}
        />
        <LabelInput
          label="temperament"
          type="text"
          defaultValue=""
          validation={validationRuleRequired}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
