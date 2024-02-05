const ContactInfo = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Get in Touch</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201879.85727331648!2d-122.60241653538259!3d37.757856708402095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbe!4v1707147304352!5m2!1sen!2sbe;"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Address . . . . .</strong> San Francisco, CA, USA
              </li>
              <li>
                <strong>Email . . . . .</strong> alex.jordan.info@gmail.com
              </li>
              <li>
                <strong>Phone . . . . .</strong> +1 415 111 1234
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactInfo;
