import './Footer.scss'

export default function Footer() {
  return (
    <footer className='bg-neutral-100 py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='lg:col-span-1'>
            <span>© 2022 Shopee. Tất cả các quyền được bảo lưu.</span>
          </div>
          <div className='lg:col-span-2'>
            <span>
              Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam
              Philippines Brazil México Colombia Chile Poland
            </span>
          </div>
        </div>
        <div className='mt-10 text-center text-sm'>
          <span>Công ty TNHH Shopee</span>
          <div className='mt-6'>
            <span>
              Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh,
              Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email:
              cskh@hotro.shopee.vn
            </span>
          </div>
          <div className='mt-6'>
            <span>
              Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221
              (ext 4678)
            </span>
          </div>
          <div className='mt-6'>
            <span>
              Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày
              10/02/2015
            </span>
          </div>
          <div className='mt-6'>
            <span>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
