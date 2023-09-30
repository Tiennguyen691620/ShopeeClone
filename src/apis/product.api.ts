import { SuccessResponseApi } from 'src/types/utils.type';
import { Product, ProductList, ProductListConfig } from './../types/prouct.type';
import http from "src/utils/http"


const Url = '/products'
const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<SuccessResponseApi<ProductList>>(Url, {
      params
    })
  },
  getProductDetail(id: string) {
    return http.get<Product>(`${Url}/${id}`)
  }
}

export default productApi