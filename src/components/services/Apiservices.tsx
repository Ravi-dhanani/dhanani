import AuthServices from "./AuthServices";
import HttpService from "./HttpService";

const Base_URl = process.env.NEXT_PUBLIC_API_URL;
class ApiServices {
  static register(data: any) {
    return HttpService.post(`${Base_URl}/auth/login`, data);
  }

  static login(data: any) {
    let res = HttpService.post(`${Base_URl}/auth/login`, data);

    return res;
  }
}

export default ApiServices;
