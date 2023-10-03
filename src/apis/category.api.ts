import { Category } from "src/types/category.type"
import { SuccessResponseApi } from "src/types/utils.type"
import http from "src/utils/http"


const Url = '/categories'

const categoryApi = {
  getCategories() {
    return http.get<SuccessResponseApi<Category[]>>(Url)
  }
}


export default categoryApi