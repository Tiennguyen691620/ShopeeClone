import { Link } from 'react-router-dom'
import './Login.scss'
import { useForm } from 'react-hook-form'
import { getRules } from 'src/utils/rules';

interface FormData {
  email: string;
  password: string
}

export default function Login() {
  const {register, handleSubmit, formState: {errors},} = useForm<FormData>();
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
              <div className="mt-8">
                <input type="email" { ...register('email', rules.email)} className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:gray-sm' placeholder='Email' />
              </div>
              <div className="mt-1 text-red-600 min-h-[1rem] text-sm"> {errors.email?.message}
              </div>
              <div className="mt-3">
                <input type="password" autoComplete="on" {...register('password', rules.password)} className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:gray-sm' placeholder='Password' />
              </div>
              <div className="mt-1 text-red-600 min-h-[1rem] text-sm"> {errors.password?.message}
              </div>
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
