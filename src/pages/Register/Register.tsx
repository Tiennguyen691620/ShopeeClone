import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "src/Components/Input";
import { getRules, schema, Schema } from "src/utils/rules";
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from "@tanstack/react-query";
import { registerAccount } from "src/apis/auth.api";
import { omit } from "lodash";
import { isAxiosUnprocessableEntity } from "src/utils/utils";
import { ResponseApi } from "src/types/utils.type";

type FormData = Schema


export default function Register() {
  const { register, handleSubmit, setError, formState: { errors }, } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: data => {
        console.log(data);
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntity<ResponseApi<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          // if (formError) {
          //   Object.keys(formError).forEach((key) => {
          //     setError(key as keyof Omit<FormData, 'confirm_password'>, {
          //       message: formError[key as keyof Omit<FormData, 'confirm_password'>],
          //       type: 'Server'
          //     })
          //   })
          // }
          if (formError?.email) {
            setError('email', {
              message: formError.email,
              type: 'Server'
            })
          }
          if (formError?.password) {
            setError('password', {
              message: formError.password,
              type: 'Server'
            })
          }
        }
      }
    })
  }
  )
  return (
    <div className="register bg-orange">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form className="p-10 rounded bg-white shadow-sm" onSubmit={onSubmit}>
              <div className="text-2xl">Đăng Ký</div>
              <Input type="text" name="email" register={register} className="mt-8" errorMessage={errors.email?.message} placeholder="Email" />
              <Input className="mt-2" name="password" type="password" register={register} errorMessage={errors.password?.message} placeholder="Password" autoComplete="on"></Input>
              <Input className="mt-2" name="confirm_password" type="password" register={register} errorMessage={errors.confirm_password?.message} placeholder="Confirm password" autoComplete="on"></Input>
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
