import { Link } from 'react-router-dom'
import './Login.scss'
import { useForm } from 'react-hook-form'
import { Schema, getRules, schema } from 'src/utils/rules'
import Input from 'src/Components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { MutationKey, useMutation } from '@tanstack/react-query'
import { login } from 'src/apis/auth.api'
import { isAxiosUnprocessableEntity } from 'src/utils/utils'
import { ResponseApi } from 'src/types/utils.type'

type FormData = Omit<Schema, 'confirm_password'>
const loginSchema = schema.omit(['confirm_password'])

export default function Login() {
  const {
    register,
    setError,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: FormData): any => {
      login(body)
    }
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => { 
        console.log('success',data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntity<ResponseApi<FormData>>(error)) {
          const formError = error.response?.data.data
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
  })
  // const value = watch()
  // console.log(value)

  return (
    <div className='login bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Nhập</div>
              <Input
                type='email'
                name='email'
                // rules={rules.email}
                register={register}
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              ></Input>
              <Input
                type='password'
                name='password'
                // rules={rules.password}
                register={register}
                className='mt-3'
                errorMessage={errors.password?.message}
                placeholder='Password'
              ></Input>
              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'
                >
                  Đăng Nhập
                </button>
              </div>
              <div className='flex item-center justify-center mt-8'>
                <span className='text-slate-400'>Bạn chưa có tài khoản?</span>
                <Link className='text-red-400 ml-1' to={'/register'}>
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
