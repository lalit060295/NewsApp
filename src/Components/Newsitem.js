import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgURL, newsURl, author, publishingData , source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imgURL
                ? "https://www.coindesk.com/resizer/56cYBGiMNUih1C-LvyjUeZofqSg=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/MMMH3OZGAZCGBCUNKA5R37754E.jpg"
                : imgURL
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                {!source ? "Anonymous" : source}
                <span className="visually-hidden">unread messages</span>
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Anonymous" : author} updated on {new Date(publishingData).toUTCString()} ago
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsURl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
