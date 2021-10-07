import React from 'react'
import { useForm } from 'react-hook-form';

const validationruleRequired ={required:'this is required'};

export default function BreedForm({saveBreed=f=>f}) {
    const {register, handleSubmit, reset, formState:{errors}} = useForm();

    const onSubmit= (data)=>{
        saveBreed({name:data.title, description: data.description, imageUri:data.imageUri,origin:data.origin,lifespan:data.lifespan, weight:data.weight, temperament:data.temperament });
        reset();
    }

    const LabelInput = ({label, type, defaultValue, validation, ...rest}) => {
        console.log('errors')
        console.log(errors)
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
         <div className="form-group">
         <LabelInput
            label="title"
            type="text"
            defaultValue=""
            validation={{required:'this is required'}}
          />
            </div>
            <div className="form-group">
             <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" {...register('description')}/>
            </div>
            <LabelInput
            label="imageUri"
            type="url"
            defaultValue=""
            validation={validationruleRequired}
          />
            <LabelInput
            label="origin"
            type="text"
            defaultValue=""
            validation={validationruleRequired}
          />
           <LabelInput
            label="lifespan"
            type="text"
            defaultValue=""
            validation={validationruleRequired}/>
           <LabelInput
            label="weight"
            type="number"
            defaultValue=""
            validation={validationruleRequired}
          />
            <LabelInput
            label="temperament"
            type="text"
            defaultValue=""
            validation={validationruleRequired}
          />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
    )
}
