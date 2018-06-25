import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SubComponent extends Component {
    render() {
        return (
            <div id="info">
                <div className="title-news">
                    <div className="title-news-left pull-left">
                        <a href="#">Thông tin thuốc mới</a>
                    </div>
                    <div className="title-news-right pull-right">
                        <a href="#" className="btn btn-default">Xem thêm  <i className="fa fa-chevron-right news-fa-chevron-right" aria-hidden="true" /></a>
                    </div>
                </div>
                <div className="clearfix" />
                <div className="row title-content ">
                    <div className="row col-xs-6 cotnent-right">
                        <div className="img-content-left">
                            <div className="col-xs-4">
                                <img src="image/news-right.png" className="img-responsive" alt />
                            </div>
                            <div className="col-xs-8">
                                <div>WHO: buôn bán nội tạng vẫn xuất hiện ở thị trường chợ đen...</div>
                                <div>
                                    <div className="col-xs-3 n-highlight">Nổi bật</div>
                                    <div className="col-xs-9 n-times-high">25/5/2017 - 10:00 AM </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row col-xs-6 cotnent-right">
                        <div className="img-content-left">
                            <div className="col-xs-4">
                                <img src="image/news-right.png" className="img-responsive" alt />
                            </div>
                            <div className="col-xs-8">
                                <div>WHO: buôn bán nội tạng vẫn xuất hiện ở thị trường chợ đen...</div>
                                <div>
                                    <div className="col-xs-3 n-highlight">Nổi bật</div>
                                    <div className="col-xs-9 n-times-high">25/5/2017 - 10:00 AM </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row col-xs-6 cotnent-right">
                        <div className="img-content-left">
                            <div className="col-xs-4">
                                <img src="image/news-right.png" className="img-responsive" alt />
                            </div>
                            <div className="col-xs-8">
                                <div>WHO: buôn bán nội tạng vẫn xuất hiện ở thị trường chợ đen...</div>
                                <div>
                                    <div className="col-xs-3 n-highlight">Nổi bật</div>
                                    <div className="col-xs-9 n-times-high">25/5/2017 - 10:00 AM </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row col-xs-6 cotnent-right">
                        <div className="img-content-left">
                            <div className="col-xs-4">
                                <img src="image/news-right.png" className="img-responsive" alt />
                            </div>
                            <div className="col-xs-8">
                                <div>WHO: buôn bán nội tạng vẫn xuất hiện ở thị trường chợ đen...</div>
                                <div>
                                    <div className="col-xs-3 n-highlight">Nổi bật</div>
                                    <div className="col-xs-9 n-times-high">25/5/2017 - 10:00 AM </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



