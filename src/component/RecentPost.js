import React from 'react';
import '../sass/recentpost.scss';

const RecentPost = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((post, index) => {
        return (
          <div className="post-wrapper" key={index}>
            <img src={post.uri} alt={post.alt} />
            <div className="overlay"></div>
            <p>{post.text}</p>
          </div>
        );
      })}
    </>
  );
};

export default RecentPost;
