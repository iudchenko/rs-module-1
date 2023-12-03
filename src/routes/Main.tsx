import { useTypedSelector } from '../redux/useTypedSelector';

const Main = () => {
  // Form 1
  const name1 = useTypedSelector((state) => state.unhandled.name);
  const age1 = useTypedSelector((state) => state.unhandled.age);
  const email1 = useTypedSelector((state) => state.unhandled.email);
  const pw1 = useTypedSelector((state) => state.unhandled.password);
  const pwc1 = useTypedSelector((state) => state.unhandled.confirmPassword);
  const gender1 = useTypedSelector((state) => state.unhandled.gender);
  const accept1 = useTypedSelector((state) => state.unhandled.accept);
  const picture1 = useTypedSelector((state) => state.unhandled.picture);
  const country1 = useTypedSelector((state) => state.unhandled.country);

  // Form 2
  const name2 = useTypedSelector((state) => state.hook.name);
  const age2 = useTypedSelector((state) => state.hook.age);
  const email2 = useTypedSelector((state) => state.hook.email);
  const pw2 = useTypedSelector((state) => state.hook.password);
  const pwc2 = useTypedSelector((state) => state.hook.confirmPassword);
  const gender2 = useTypedSelector((state) => state.hook.gender);
  const accept2 = useTypedSelector((state) => state.hook.accept);
  // const picture2 = useTypedSelector((state) => state.hook.picture);
  const country2 = useTypedSelector((state) => state.hook.country);

  return (
    <main className="prose text-white ">
      <div className="flex">
        <div className="p-5">
          <h2 className="text-white">Uncontrolled Form</h2>
          <p>Name: {name1}</p>
          <p>Age: {age1}</p>
          <p>Email: {email1}</p>
          <p>Password: {pw1}</p>
          <p>Confirm Password: {pwc1}</p>
          <p>Gender: {gender1}</p>
          <p>Terms: {accept1 ? 'accepted' : ''}</p>
          <p>Picture:</p>
          {picture1 && <img src={picture1} className="max-w-xs" />}
          <p>Country: {country1}</p>
        </div>
        <div className="p-5">
          <h2 className="text-white">Hook Form</h2>
          <p>Name: {name2}</p>
          <p>Age: {age2}</p>
          <p>Email: {email2}</p>
          <p>Password: {pw2}</p>
          <p>Confirm Password: {pwc2}</p>
          <p>Gender: {gender2}</p>
          <p>Terms: {accept2 ? 'accepted' : ''}</p>
          <p>Picture:</p>
          {/* {picture2 && <img src={picture2} className="max-w-xs" />} */}
          <p>Country: {country2}</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
