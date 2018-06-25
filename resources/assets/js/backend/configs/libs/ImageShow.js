import React, { Component } from "react";

export default class ImageShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    componentDidMount() {
       
    }
    getFileChange (e) {
        let that = this
        let reader = new FileReader()
        reader.onload = function (e) {
           $(that.refs.image).attr('src', e.target.result)
        };
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        this.props.renderFile(e.target.files[0])
    }
    
    render() {
        return <div>
            <span className="btn btn-primary btn-file">
                Chọn ảnh avatar... <input type="file" name="avatar" 
                onChange={(e) => this.getFileChange(e)} />
            </span>
            <div style={{ marginTop: 15 }}>
                <img id="blah" ref="image"
                    alt style={{ width: 140, height: 150 }} src={"http://localhost/cms/images/Jellyfish.jpg"} />
            </div>
        </div>
    }
}