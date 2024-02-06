import { Fragment } from "react";
const bio_ = ` <p>
<strong>Hello! I’m Julie Lao.</strong>
A seasoned DevOps Engineer with a strong focus on automation and infrastructure as code. Specializes in using Ansible to streamline software deployments, configuration management, and continuous integration processes. Demonstrates a proven track record of leveraging Ansible to enhance operational efficiencies, reduce deployment times, and ensure consistency across development, testing, and production environments. Passionate about embracing new technologies to solve complex technical challenges in cloud-based architectures.
</p>`;
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">About</span> Me
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
            ></div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Residence . . . . .</strong> San Francisco, CA, USA
                </li>
                <li>
                  <strong>Freelance . . . . .</strong> Available
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;
