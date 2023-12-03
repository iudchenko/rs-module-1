import { useDispatch } from 'react-redux';
import { saveFormData } from '../redux/unhandledFormSlice'; // replace with your actual path
import { Country, Gender } from '../interfaces/interfaces';
import { useTypedSelector } from '../redux/useTypedSelector';

const Form1 = () => {
  // const countries = Object.keys(Country).map(
  //   (key) => Country[key as keyof typeof Country]
  // );
  const countries = useTypedSelector((state) => state.countries.countries);

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      age: { value: number };
      email: { value: string };
      password: { value: string };
      confirmPassword: { value: string };
      gender: { value: Gender };
      terms: { value: boolean };
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
      passwordConfirmation: target.confirmPassword.value,
      gender: target.gender.value,
      accept: target.terms.value,
      picture: pictureBase64,
      country: target.country.value,
    };

    dispatch(saveFormData(formSubmission));
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

      <label htmlFor="age" className="label">
        Age
      </label>
      <input id="age" name="age" type="number" min="0" className="input" />

      <label htmlFor="email" className="label">
        Email
      </label>
      <input id="email" name="email" type="email" className="input" />

      <label htmlFor="password" className="label">
        Password
      </label>
      <input id="password" name="password" type="password" className="input" />

      <label htmlFor="confirmPassword" className="label">
        Confirm Password
      </label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        className="input"
      />

      <label htmlFor="gender" className="label">
        Gender
      </label>
      <select id="gender" name="gender" className="select">
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <div className="flex items-center gap-2">
        <input id="terms" name="terms" type="checkbox" className="checkbox" />
        <label htmlFor="terms" className="checkbox-label">
          Accept T&C
        </label>
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
      </div>

      <label htmlFor="country" className="checkbox-label">
        Country
      </label>
      <select id="country" name="country" className="select">
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default Form1;
