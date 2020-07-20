import React, { useContext } from "react";
import AppCtx from "../context/appContext";
import { Redirect } from "react-router-dom";
const GalleryItem = () => {
  const appContext = useContext(AppCtx);
  const { alt_description, description, urls, user } = appContext.images;

  if (!user) {
    return <Redirect to="/gallery" />;
  }

  return (
    <div className="gallery_item_wrapper">
      <img
        className="gallery_item_img"
        src={urls.regular}
        alt={alt_description}
      />
      <div>
        <p className="gallery_img_desc"> {description} </p>
        <hr />
        <div className="gallery_user">
          <img
            className="rounded"
            src={user.profile_image.large}
            alt={user.name}
          />
          <p>
            <strong>
              <span className="txt">Location → </span>
            </strong>
            {user.location}
          </p>
          <p>
            <i class="fa fa-instagram"></i> → {user.instagram_username}
          </p>
          <p>
            <strong>
              <span className="txt">Total Photos → </span>
            </strong>
            {user.total_photos}
          </p>
          <p>
            <strong>
              <span className="txt">
                Total <i className="fa fa-heart"></i> →
              </span>
            </strong>
            {user.total_likes}
          </p>
          <hr />
          <p className="bio"> {user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
