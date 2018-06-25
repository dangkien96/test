
  import React, { Component } from "react";

export default class DatePickerInput extends Component{

  constructor( props ){
    super( props );
    this.state = {
        value: ""
	}
  }

  componentDidMount () {
	var that = this
    $(this.refs.datePicker).datepicker(
		that.props.setDatePicker
	 ).on('changeDate', function(e) {
		that.props.onChangeValue(moment(e.date).format('DD/MM/YYYY'))
	});
  }

  render(){
    return  <div className="input-group">
                <input  ref="datePicker" id="datepicker" type="text" className="form-control" />
                <span className="input-group-addon">
                    <i className="fa fa-calendar">
                    </i>
                </span>
            </div>;
  }
}