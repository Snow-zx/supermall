import {request} from "@/network/request";

export function getHomeMultidata(){
  return request('/home/multidata')
}
