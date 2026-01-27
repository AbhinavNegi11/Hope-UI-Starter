import React, { Fragment, memo } from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

interface Props {
  blogImage?: any;
  id?: any;
  blogDate?: any;
  blogTitle?: String;
  blogAuther?: String;
  blogDescription?: String;
}
const BlogWidget2 = memo((props: Props) => {
  return (
    <Fragment>
      <Card>
        <Card.Body className="p-3">
          <Image
            src={props.blogImage}
            alt={props.id}
            className="img-fluid rounded"
            loading="lazy"
          />
          <div className="text-primary sub-title py-3">{props.blogDate}</div>
          <Link href="/landing-pages/blog-detail" className="my-3 h5">
            {props.blogTitle}
          </Link>
          <div className="d-flex align-items-center mt-3">
            <span>{props.blogAuther}</span>
            <span className="ms-3 text-primary">Admin</span>
          </div>
          <p className="pt-3 mb-4 line-count-3">{props.blogDescription}</p>
          <Link href="/landing-pages/blog-detail" className="btn btn-primary">
            Read More
          </Link>
        </Card.Body>
      </Card>
    </Fragment>
  );
});
BlogWidget2.displayName = "BlogWidget2";
export default BlogWidget2;
