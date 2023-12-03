import { useForm, Controller, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../validations/formValidation';

import { HookFormState } from '../interfaces/interfaces';
import { useTypedSelector } from '../redux/useTypedSelector';
import { useDispatch } from 'react-redux';
import { saveHookFormData } from '../redux/hookFormSlice';
import { useNavigate } from 'react-router-dom';

type FormResolver = Resolver<HookFormState>;

const Form2 = () => {
  const {
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<HookFormState>({
    resolver: yupResolver(formSchema) as FormResolver,
    defaultValues: {
      name: '',
      age: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      accept: false,
      picture: '',
      country: '',
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onBlur = async (fieldName: keyof HookFormState) => {
    await trigger(fieldName);
  };

  const onSubmit = async (data: HookFormState) => {
    const formSubmission = {
      ...data,
    };

    // Handle form submission
    console.log(formSubmission);
    dispatch(saveHookFormData(formSubmission));
    navigate('/');
  };
  const countries = useTypedSelector((state) => state.countries.countries);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2">
      <div>
        <label className="label">Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <div>
              <input
                {...field}
                placeholder="Name"
                onBlur={() => onBlur('name')}
                className="input"
              />
              <p className="validation-error">{errors.name?.message}</p>
            </div>
          )}
        />
      </div>

      <div>
        <label className="label">Age</label>
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <div>
              <input
                {...field}
                placeholder="Age"
                type="number"
                onBlur={() => onBlur('age')}
                className="input"
              />
              <p className="validation-error">{errors.age?.message}</p>
            </div>
          )}
        />
      </div>

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              {...field}
              placeholder="Email"
              onBlur={() => onBlur('email')}
              className="input"
            />
            <p className="validation-error">{errors.email?.message}</p>
          </div>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <div>
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              {...field}
              type="password"
              placeholder="Password"
              onBlur={() => onBlur('password')}
              className="input"
            />
            <p className="validation-error">{errors.password?.message}</p>
          </div>
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <div>
            <label htmlFor="confirmPassword" className="label">
              Confirm Password
            </label>
            <input
              {...field}
              type="password"
              placeholder="Confirm Password"
              onBlur={() => onBlur('confirmPassword')}
              className="input"
            />
            <p className="validation-error">
              {errors.confirmPassword?.message}
            </p>
          </div>
        )}
      />

      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <div>
            <label htmlFor="gender" className="label">
              Gender
            </label>
            <select
              {...field}
              onBlur={() => onBlur('gender')}
              className="select"
            >
              <option value="" disabled>
                Please, select
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p className="validation-error">{errors.gender?.message}</p>
          </div>
        )}
      />

      <Controller
        name="accept"
        control={control}
        render={({ field }) => (
          <div className="flex gap-2 align-center">
            <input
              {...field}
              type="checkbox"
              id="accept"
              value="false"
              onBlur={() => onBlur('accept')}
              className="checkbox"
            />
            <label htmlFor="accept" className="checkbox-label">
              Accept T&C
            </label>
            <p className="validation-error">{errors.accept?.message}</p>
          </div>
        )}
      />

      <Controller
        name="picture"
        control={control}
        render={({ field }) => (
          <div>
            <label htmlFor="picture" className="label">
              Upload Picture
            </label>
            <input
              type="file"
              accept=".png, .jpeg"
              className="input-file"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    const base64String = reader.result as string;
                    // console.log(base64String);
                    field.onChange(base64String);
                  };

                  reader.readAsDataURL(file);
                }
              }}
            />
            <p className="validation-error">{errors.picture?.message}</p>
          </div>
        )}
      />

      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <div>
            <label htmlFor="country" className="label">
              Country
            </label>
            <select
              {...field}
              onBlur={() => onBlur('country')}
              className="select"
            >
              <option value="" disabled>
                Please, select
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <p className="validation-error">{errors.country?.message}</p>
          </div>
        )}
      />

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default Form2;
