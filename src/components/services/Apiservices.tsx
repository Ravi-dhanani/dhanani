import AuthServices from "./AuthServices";
import HttpService from "./HttpService";

const Base_URl = process.env.NEXT_PUBLIC_API_URL;
const token = AuthServices.getToken();
class ApiServices {
  static login(data: any) {
    let res = HttpService.post(`${Base_URl}/api/auth/login`, data);
    return res;
  }

  static merchantList() {
    const res: any = HttpService.get(`${Base_URl}/api/merchants/list`, token);
    return res;
  }
  static addmerchant(data: any) {
    const res: any = HttpService.post(
      `${Base_URl}/api/merchants/add`,
      data,
      token,
    );
    return res;
  }
  static getMerchant(id: string) {
    const res: any = HttpService.get(`${Base_URl}/api/merchants/${id}`, token);
    return res;
  }
  static updateMerchant(id: string, data: any) {
    const res: any = HttpService.put(
      `${Base_URl}/api/merchants/${id}`,
      data,
      token,
    );
    return res;
  }
  static deleteMerchant(id: string) {
    const res: any = HttpService.delete(
      `${Base_URl}/api/merchants/${id}`,
      token,
    );
    return res;
  }
}

export default ApiServices;
