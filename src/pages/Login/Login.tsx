import { Link } from 'react-router-dom'
import './Login.scss'
import { useForm } from 'react-hook-form'
import { getRules } from 'src/utils/rules';
import Input from 'src/Components/Input';

interface FormData {
  email: string;
  password: string
}

export default function Login() {
  const { register, handleSubmit, formState: { errors }, } = useForm<FormData>();
  const rules = getRules();
  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    }
  )
  return (
    <div className="login bg-orange">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form className="p-10 rounded bg-white shadow-sm" onSubmit={onSubmit}>
              <div className="text-2xl">Đăng Nhập</div>
              <Input type="text" name="email" rules={rules.email} register={register} className="mt-8" errorMessage={errors.email?.message} placeholder="Email"></Input>
              <Input type="password" name="password" rules={rules.password} register={register} className="mt-3" errorMessage={errors.password?.message} placeholder="Password"></Input>
              <div className="mt-3">
                <button type='submit' className="w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600">Đăng Nhập</button>
              </div>
              <div className="flex item-center justify-center mt-8">
                <span className="text-slate-400">
                  Bạn chưa có tài khoản?
                </span>
                <Link className="text-red-400 ml-1" to={'/register'}>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
