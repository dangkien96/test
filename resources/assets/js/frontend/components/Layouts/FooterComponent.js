import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container-fluid section-width">
                        <div className="row">
                            <div className="col-xs-12 access">
                                <div className="col-xs-4 name text-center">
                                    <h3> Cổng thông tin điện tử </h3>
                                    <p className="text-fix"> Trung tâm điều phối quốc gia về ABC </p>
                                    <p className="text-left margin-footer-10">
                                        <span>Giấy phép:</span> Số 278/GP-TTĐT do Cục Phát thanh, Truyền hình và Thông tin Điện tử - Bộ Thông tin và Truyền thông cấp ngày 24/8/2017
                                    </p>
                                    <p className="text-left">
                                        <span>Ghi rõ nguồn:</span>"Cổng thông tin điện tử - Trung tâm Điều phối Quốc gia về ghép bộ phận cơ thể người" hoặc "http://vnhot.vn" khi phát hành lại thông tin từ cổng này
                                    </p>
                                </div>
                                <div className="col-xs-4">
                                    <h3> Liên hệ </h3>
                                    <p><span>Địa chỉ:</span> 40 Tràng Thi, Hoàn Kiếm, Hà Nội.</p>
                                    <p><span>Điện thoại:</span> 024. 39386692 – Fax: 024.39386693</p>
                                    <p><span>Trưởng ban biên tập:</span> GS.TS Trịnh Hồng Sơn</p>
                                    <p><span>Email:</span> vncchot@moh.gov.vn</p>
                                </div>
                                <div className="col-xs-4 access-add">
                                    <h3>Truy cập</h3>
                                    <p><span>Tổng số người truy cập:</span> 123456</p>
                                    <p><span>Số người đang online:</span> 123456</p>
                                    <p><span>Trong tuần:</span> 123456</p>
                                    <p><span>Trong tháng:</span> 12345</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="login">
                        <div className="col-xs-12">
                            <div className="col-xs-4 login-name">
                                Login
                            </div>
                            <div className="col-xs-4 pull-right text-right">
                                <i className="fa fa-facebook" aria-hidden="true" />
                                <i className="fa fa-tumblr" aria-hidden="true" />
                                <i className="fa fa-skype" aria-hidden="true" />
                                <i className="fa fa-envelope" aria-hidden="true" />
                                <i className="fa fa-wifi" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}



