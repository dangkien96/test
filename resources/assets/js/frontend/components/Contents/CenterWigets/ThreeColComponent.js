import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class ThreeColComponent extends Component {
    render() {
        return (
            <div id="safety">
                <div className="title-news">
                    <div className="title-news-left pull-left">
                        <a href="#">Sống khỏe</a>
                    </div>
                    <div className="title-news-right pull-right">
                        <a href="#" className="btn btn-default">Xem thêm  <i className="fa fa-chevron-right news-fa-chevron-right" aria-hidden="true" /></a>
                    </div>
                </div>
                <div className="clearfix" />
                <div className="row title-content">
                    <div className=" col-xs-4 content-left left-safety">
                        <div className="news-img-highlight">
                            <img src="image/news-heart.png" className="img-responsive" alt />
                        </div>
                        <div className="text-highlight">
                            Những lưu ý khi dùng thuốc ở người bệnh gan...
                        </div>
                        <div>
                            <div className="col-xs-3 n-highlight">Tin mới</div>
                            <div className="col-xs-9 n-times-high">25/5/2017 - 10:00 AM </div>
                        </div>
                    </div>
                    <div className=" col-xs-4 content-left left-safety">
                        <div className="news-img-highlight">
                            <img src="image/news-heart.png" className="img-responsive" alt />
                        </div>
                        <div className="text-highlight">
                            Những lưu ý khi dùng thuốc ở người bệnh gan...
                        </div>
                        <div>
                            <div className="col-xs-3 n-highlight">Tin mới</div>
                            <div className="col-xs-9 n-times-high">25/5/2017 - 10:00 AM </div>
                        </div>
                    </div>
                    <div className=" col-xs-4 content-left left-safety">
                        <div className="news-img-highlight">
                            <img src="image/news-heart.png" className="img-responsive" alt />
                        </div>
                        <div className="text-highlight">
                            Những lưu ý khi dùng thuốc ở người bệnh gan...
                        </div>
                        <div>
                            <div className="col-xs-3 n-highlight">Tin mới</div>
                            <div className="col-xs-9 n-times-high">25/5/2017 - 10:00 AM </div>
                        </div>
                    </div>
                </div>
                {/* tower */}
                <div className="row tower">
                    <div className="tower-one">
                        <div className="col-xs-3">
                            <img src="image/tower.png" className="img-responsive" alt />
                        </div>
                        <div className="col-xs-9">
                            <div className="bold-text">
                                Thời tiết giao mùa: Cảnh giác viêm phổi cộng đồng ...
                            </div>
                            <div>
                                Một trong những trở ngại lớn nhất mà bệnh nhân cần ghép tạng và bác sĩ của họ gặp phải là thiếu nguồn hiến tạng. Dù họ đang chờ đợi để được nhận thận, tim, ruột, gan hay phổi, số bệnh nhân chết trong khi mòn mỏi trong danh sách chờ ghép cứ 10 phút...
                            </div>
                            <div>
                                <div className="col-xs-1 n-high">Tin mới</div>
                                <div className="col-xs-11 n-times-high">25/5/2017 - 10:00 AM </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                    <div className="tower-one">
                        <div className="col-xs-3">
                            <img src="image/tower.png" className="img-responsive" alt />
                        </div>
                        <div className="col-xs-9">
                            <div className="bold-text">
                                Thời tiết giao mùa: Cảnh giác viêm phổi cộng đồng ...
                            </div>
                            <div>
                                Một trong những trở ngại lớn nhất mà bệnh nhân cần ghép tạng và bác sĩ của họ gặp phải là thiếu nguồn hiến tạng. Dù họ đang chờ đợi để được nhận thận, tim, ruột, gan hay phổi, số bệnh nhân chết trong khi mòn mỏi trong danh sách chờ ghép cứ 10 phút...
                            </div>
                            <div>
                                <div className="col-xs-1 n-high">Tin mới</div>
                                <div className="col-xs-11 n-times-high">25/5/2017 - 10:00 AM </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                    <div className="tower-one">
                        <div className="col-xs-3">
                            <img src="image/tower.png" className="img-responsive" alt />
                        </div>
                        <div className="col-xs-9">
                            <div className="bold-text">
                                Thời tiết giao mùa: Cảnh giác viêm phổi cộng đồng ...
                            </div>
                            <div>
                                Một trong những trở ngại lớn nhất mà bệnh nhân cần ghép tạng và bác sĩ của họ gặp phải là thiếu nguồn hiến tạng. Dù họ đang chờ đợi để được nhận thận, tim, ruột, gan hay phổi, số bệnh nhân chết trong khi mòn mỏi trong danh sách chờ ghép cứ 10 phút...
                            </div>
                            <div>
                                <div className="col-xs-1 n-high">Tin mới</div>
                                <div className="col-xs-11 n-times-high">25/5/2017 - 10:00 AM </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



