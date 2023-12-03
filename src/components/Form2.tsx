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
      picture: undefined,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                placeholder="Name"
                onBlur={() => onBlur('name')}
                className="input"
              />
              <p>{errors.name?.message}</p>
            </>
          )}
        />
      </div>

      <div>
        <label>Age</label>
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                placeholder="Age"
                type="number"
                onBlur={() => onBlur('age')}
                className="input"
              />
              <p>{errors.age?.message}</p>
            </>
          )}
        />
      </div>

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              {...field}
              placeholder="Email"
              onBlur={() => onBlur('email')}
              className="input"
            />
            <p>{errors.email?.message}</p>
          </>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <>
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
            <p>{errors.password?.message}</p>
          </>
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <>
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
            <p>{errors.confirmPassword?.message}</p>
          </>
        )}
      />

      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <>
            <label htmlFor="gender" className="label">
              Gender
            </label>
            <select {...field} onBlur={() => onBlur('gender')}>
              <option value="" disabled>
                Please, select
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p>{errors.gender?.message}</p>
          </>
        )}
      />

      <Controller
        name="accept"
        control={control}
        render={({ field }) => (
          <>
            <input
              {...field}
              type="checkbox"
              value="false"
              onBlur={() => onBlur('accept')}
              className="checkbox"
            />
            <label htmlFor="accept" className="checkbox-label">
              Accept T&C
            </label>
            <p>{errors.accept?.message}</p>
          </>
        )}
      />

      <Controller
        name="picture"
        control={control}
        render={({ field }) => (
          <>
            <label htmlFor="picture">Upload Picture</label>
            <input
              type="file"
              accept=".png, .jpeg"
              className="input-file"
              onChange={(e) => {
                const file = e.target.files?.[0];
                field.onChange(file);
              }}
            />
            <p>{errors.picture?.message}</p>
          </>
        )}
      />

      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <>
            <label htmlFor="country">Country</label>
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
            <p>{errors.country?.message}</p>
          </>
        )}
      />

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default Form2;
