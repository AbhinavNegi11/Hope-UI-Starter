import React, { memo, Fragment } from "react";

// react-bootstrap
import { Button, Card } from "react-bootstrap";
// Link
import  Link  from "next/link";
import Image from "next/image";

interface Props{
  cardClass?:any
  blogImage?:any
  id?:any
  blogTitle?:String
  blogDate?:String
  blogAuther?:String

}

const BlogWidget = memo((props:Props) => {
  return (
    <Fragment>
      <Card className={props.cardClass}>
        <Image
          src={props.blogImage}
          alt={props.id}
          className={`img-fluid rounded `}
          loading="lazy"
        />
        <Card.Body className="blog-card">
          <div className="sub-title text-primary mb-2">{props.blogDate}</div>

          <Link href="/landing-pages/blog-detail" className="mt-2 h5 line-count-2">
            {props.blogTitle}
          </Link>
          <div className="mt-5">
            <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
              <path d="M6.2108 0.102935L6.22367 1.1237L10.766 1.18087L0.816548 11.1303L1.54744 11.8612L11.4969 1.91176L11.554 6.45402L12.5748 6.46689L12.4957 0.181986L6.2108 0.102935Z" fill="currentColor"></path>
            </svg>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
});
BlogWidget.displayName = "BlogWidget"
export default BlogWidget;
