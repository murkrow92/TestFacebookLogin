/**
 * Created by Murkrow on 6/2/2017.
 */

import formStyle from "./FormStyle";

export default options = {
    stylesheet:  formStyle,
    auto: 'placeholders',
    fields: {
        email: {
            label: 'Email',
            error: 'Không đúng định dạng Email',
        },
        phone: {
            label: 'Điện thoại',
            placeholder: 'Số điện thoại',
            error: 'Không đúng định dạng Số điện thoại'
        },
        date: {
            label: 'Ngày',
            placeholder: 'Ngày'
        },
        month: {
            label: 'Tháng',
            placeholder: 'Tháng'
        },
        year: {
            label:'Năm',
            placeholder: 'Năm'
        },
        hour: {
            label: 'Giờ',
            placeholder: 'Giờ'
        },
        minute: {
            label: 'Phút',
            placeholder: 'Phút'
        }
    }
};