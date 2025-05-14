import React from "react";

function LeftSection({
  imageUrl,
  title,
  description,
  tryDemoLink,
  learnMoreLink,
  playStoreLink,
  appStoreLink,
  link,
  linkTitle,
}) {
  return (
    <div className="container mb-15">
      <div className="row">
        <div className="col-6">
          <img src={imageUrl} alt="Kite" />
        </div>
        <div className="col-1"></div>
        <div className="col-5 mt-5">
          <h2>{title}</h2>
          <p className="fs-5 mb-3 mt-3">{description}</p>
          {link && (
            <div className="mb-5 mt-5 d-flex gap-5">
              <a className="text-decoration-none" href={link}>
                {linkTitle} <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          )}
          {(tryDemoLink || learnMoreLink) && (
              <div className="mb-5 mt-5 d-flex gap-5">
                {tryDemoLink && (
                  <a className="text-decoration-none" href={tryDemoLink}>
                    Try Demo <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                )}
                {learnMoreLink && (
                  <a className="text-decoration-none" href={learnMoreLink}>
                    Learn More <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                )}
              </div>
            )}
          <div className="d-flex gap-3">
            <a href={playStoreLink}>
              <img
                src="public/media/images/googlePlayBadge.svg"
                alt="Google Play store"
              />
            </a>
            <a href={appStoreLink}>
              <img
                src="public/media/images/appstoreBadge.svg"
                alt="app store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
