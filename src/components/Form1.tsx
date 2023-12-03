import { useDispatch } from 'react-redux';
import { saveFormData } from '../redux/unhandledFormSlice'; // replace with your actual path
import { Country, Gender, ValidationErrors } from '../interfaces/interfaces';
import { useTypedSelector } from '../redux/useTypedSelector';
import { formSchema } from '../validations/formValidation';
import { useState } from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Form1 = () => {
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  const countries = useTypedSelector((state) => state.countries.countries);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      age: { value: number };
      email: { value: string };
      password: { value: string };
      confirmPassword: { value: string };
      gender: { value: Gender };
      accept: { checked: boolean };
      picture: { files: FileList };
      country: { value: Country };
    };

    // Handle image upload and convert to base64
    let pictureBase64 = '';
    if (target.picture.files.length > 0) {
      const file = target.picture.files[0];
      pictureBase64 = await readFileAsBase64(file);
    }

    const formSubmission = {
      name: target.name.value,
      age: target.age.value,
      email: target.email.value,
      password: target.password.value,
      confirmPassword: target.confirmPassword.value,
      gender: target.gender.value,
      accept: target.accept.checked,
      picture: pictureBase64,
      country: target.country.value,
    };

    const validationErrors: ValidationErrors = {};
    try {
      await formSchema.validate(formSubmission, { abortEarly: false });
    } catch (errors) {
      if (yup.ValidationError.isError(errors)) {
        errors.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
      }
    }

    setValidationErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
      dispatch(saveFormData(formSubmission));
      navigate('/');
    }
  };

  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Failed to convert file to base64.'));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <label htmlFor="name" className="label">
        Name
      </label>
      <input id="name" name="name" type="text" className="input" />
      {validationErrors.name && (
        <p className="validation-error">{validationErrors.name}</p>
      )}

      <label htmlFor="age" className="label">
        Age
      </label>
      <input id="age" name="age" type="number" min="0" className="input" />
      {validationErrors.age && (
        <p className="validation-error">{validationErrors.age}</p>
      )}

      <label htmlFor="email" className="label">
        Email
      </label>
      <input id="email" name="email" type="text" className="input" />
      {validationErrors.email && (
        <p className="validation-error">{validationErrors.email}</p>
      )}

      <label htmlFor="password" className="label">
        Password
      </label>
      <input id="password" name="password" type="password" className="input" />
      {validationErrors.password && (
        <p className="validation-error">{validationErrors.password}</p>
      )}

      <label htmlFor="confirmPassword" className="label">
        Confirm Password
      </label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        className="input"
      />
      {validationErrors.confirmPassword && (
        <p className="validation-error">{validationErrors.confirmPassword}</p>
      )}

      <label htmlFor="gender" className="label">
        Gender
      </label>
      <select id="gender" name="gender" className="select" defaultValue="">
        <option value="" disabled>
          Please, select
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {validationErrors.gender && (
        <p className="validation-error">{validationErrors.gender}</p>
      )}

      <div className="flex items-center gap-2">
        <input id="accept" name="accept" type="checkbox" className="checkbox" />
        <label htmlFor="accept" className="checkbox-label">
          Accept T&C
        </label>
        {validationErrors.accept && (
          <p className="validation-error">{validationErrors.accept}</p>
        )}
      </div>
      <div className="w-full max-w-[200px]">
        <label htmlFor="picture" className="label w-full cursor-pointer">
          Upload Picture
        </label>
        <input
          id="picture"
          name="picture"
          type="file"
          accept=".png, .jpeg"
          className="input-file"
        />
        {validationErrors.picture && (
          <p className="validation-error">{validationErrors.picture}</p>
        )}
      </div>

      <div>
        <label htmlFor="country" className="checkbox-label">
          Country
        </label>
        <select id="country" name="country" className="select" defaultValue="">
          <option value="" disabled>
            Please, select
          </option>

          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {validationErrors.country && (
          <p className="validation-error">{validationErrors.country}</p>
        )}
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default Form1;
