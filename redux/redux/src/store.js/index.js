import { createStore } from "redux";
import {reducer} from '../reducer/index.js'


// 构建store
const store=createStore(reducer);
// 导出
export {
  store
};