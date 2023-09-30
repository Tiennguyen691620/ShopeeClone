import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to={''}>
      <div className='bg-white shadow rounded-sm hover:translate-y-[-0.06rem] hover:shadow-md duration-100 transition-transform overflow-hidden'>
        <div className='w-full pt-[100%] relative'>
          <img
            src='https://images.unsplash.com/photo-1694257239010-72b57412deda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80'
            alt=''
            className='absolute top-0 left-0 bg-white h-full object-cover'
          />
        </div>
        <div className='p-2 overflow-hidden'>
          <div className='min-h-[2rem] line-clamp-2 text-xs'>
            Ốp lưng trong suốt Cao Cấp bảo vệ cam chống xước tuyệt đối Iphone 13 promax 12 12pro
            12promax,11 14 pro max 7plus 8 6cam
          </div>
          <div className='flex items-center mt-3'>
            <div className='line-through max-w-[50%] text-gray-500 truncate text-sm'>₫55.000</div>
            <div className='text-orange truncate ml-1'>
              <span className='text-xs'>₫</span>
              <span className=''>5.000</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-end'>
            <div className='flex items-center'>
              <div className='relative'>
                <div
                  className='absolute top-0 left-0-h-full overflow-hidden'
                  style={{ width: '50%' }}
                >
                  <svg
                    enableBackground='new 0 0 15 15'
                    viewBox='0 0 15 15'
                    x={0}
                    y={0}
                    className='w-3 h3 fill-yellow-300 text-yellow-300'
                  >
                    <polygon
                      points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeMiterlimit={10}
                    />
                  </svg>
                </div>
                <svg
                  enableBackground='new 0 0 15 15'
                  viewBox='0 0 15 15'
                  x={0}
                  y={0}
                  className='w-3 h-3 fill-current text-gray-300'
                >
                  <polygon
                    points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeMiterlimit={10}
                  />
                </svg>
              </div>
            </div>
            <div className="ml-2 text-sm">
              <span className=''>Đã bán</span>
              <span className='ml-1'>5.66k</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
