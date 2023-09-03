import { error } from "console";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "src/Components/Input";
import { getRules } from "src/utils/rules";

interface FormData {
  email: string;
  password: string;
  confirm_password: string;
}

export default function Register() {
  const { register, handleSubmit, getValues, formState: { errors }, } = useForm<FormData>();
  const rules = getRules(getValues);
  const onSubmit = handleSubmit(
    (data) => {
      console.log('obj', data)
    }
  )
  return (
    <div className="register bg-orange">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form className="p-10 rounded bg-white shadow-sm" onSubmit={onSubmit}>
              <div className="text-2xl">Đăng Ký</div>
              <Input type="text" name="email" rules={rules.email} register={register} className="mt-8" errorMessage={errors.email?.message} placeholder="Email" />
              {/* <div className="mt-8">
                <input
                  type="text"
                  {...register('email', rules.email)}
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:gray-sm' placeholder='Email' />
                <div className="mt-1 text-red-600 min-h-[1.25rem] text-sm">{errors.email?.message}
                </div>
              </div> */}
              <Input className="mt-2" name="password" type="password" register={register} rules={rules.password} errorMessage={errors.password?.message} placeholder="Password" autoComplete="on"></Input>
              {/* <div className="mt-2">
                <input type="password" autoComplete="on" {...register('password', rules.password)} className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:gray-sm' placeholder='Password' />
                <div className="mt-1 text-red-600 min-h-[1.25rem] text-sm">{errors.password?.message}
                </div>
              </div> */}
              <Input className="mt-2" name="confirm_password" type="confirm_password" register={register} rules={rules.confirm_password} errorMessage={errors.confirm_password?.message} placeholder="Confirm password" autoComplete="on"></Input>
              {/* <div className="mt-2">
                <input type="password" autoComplete="on" {...register('confirm_password', rules.confirm_password)} className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:gray-sm' placeholder='Confirm Password' />
                <div className="mt-1 text-red-600 min-h-[1.25rem] text-sm">{errors.confirm_password?.message}
                </div>
              </div> */}
              <div className="mt-2">
                <button type="submit" className="w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600">Đăng ký</button>
              </div>
              <div className="flex item-center justify-center mt-8">
                <span className="text-slate-400">
                  Bạn đã có tài khoản?
                </span>
                <Link className="text-red-400 ml-1" to={'/login'}>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
