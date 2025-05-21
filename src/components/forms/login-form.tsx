import { useForm } from 'react-hook-form';
import Router from 'next/router';
import { useAuth } from '../../hooks/use-auth';

interface IFormInput {
  email: string;
  password: string;
}

export function LoginForm() {
  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const { login } = useAuth();
  
  const onSubmit = async (data: IFormInput) => {
    try {
      await login(data.email, data.password);
      Router.push('/product/details');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="email" ref={register({ required: true })} />
      {errors.email && <span>This field is required</span>}
      <input name="password" type="password" ref={register({ required: true })} />
      {errors.password && <span>This field is required</span>}
      <button type="submit">Login</button>
    </form>
  );
}