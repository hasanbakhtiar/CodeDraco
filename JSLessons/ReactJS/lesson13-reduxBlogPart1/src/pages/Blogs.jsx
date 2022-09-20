import React from "react";
import { connect } from "react-redux";
import SingleBlog from "./SingleBlog";

const Blogs = (props ) => {
  return (
    <div className="mt-3">
      <div className="row">
        {props.blogvalues.map((fd, i) => {
          return <SingleBlog key={i} {...fd} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blogvalues: state.actionreducer,
  };
};

export default connect(mapStateToProps)(Blogs);
