import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProudctResponseModel extends ResponseModel{
    data:Product[];
}