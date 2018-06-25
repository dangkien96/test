import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ColColSubComponent extends Component {
    render() {
        return (
            <div>
                <div id="index">
                    <div className="index-news">
                        <div className="title-news">
                            <div className="title-news-left pull-left">
                                <a href="#">Tin tức</a>
                            </div>
                            <div className="title-news-right pull-right">
                                <a href="#" className="btn btn-default">Xem thêm  <i className="fa fa-chevron-right news-fa-chevron-right" aria-hidden="true" /></a>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row title-content ">
                            <div className="col-xs-6 content-left">
                                <div className="news-img-highlight">
                                    <img src="image/news-heart.png" className="img-responsive" alt />
                                    <div className="news-hightlight">
                                        Nổi bật
                                    </div>
                                </div>
                                <div className="text-highlight">
                                    Mỹ: Xây dựng hệ thống điều phối tạng công bằng
                                </div>
                                <div className="name-highlight">
                                    <div>
                                        <b><i>Nguyễn Văn A</i></b> - <i>5/12/2015 10:00am</i>
                                    </div>
                                    <div className="news-label">
                                    </div>
                                </div>
                                <div className="news-text">
                                    Một trong những trở ngại lớn nhất mà bệnh nhân cần ghép tạng và bác sĩ của họ gặp phải là thiếu nguồn hiến tạng. Dù họ đang chờ đợi để được nhận thận, tim, ruột, gan hay phổi, số bệnh nhân chết trong khi mòn mỏi trong danh sách chờ ghép cứ 10 phút...
                                </div>
                            </div>
                            <div className="col-xs-6 cotnent-right">
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
                                <div className="clearfix" />
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
                                <div className="clearfix" />
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
                                <div className="clearfix" />
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
                </div>
            </div>
        );
    }
}



