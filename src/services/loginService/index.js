import { config, Axios } from "./../../core";

export const login = (dataLogin) => {
    return Axios( {
        url: `${config.url}QuanLyNguoiDung/DangNhap`,
        method: "post",
        data: dataLogin,
    } );
}

