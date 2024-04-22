import "./ForYouSection.css";

const ForYouSection = () => {
  return (
    <section id="for-you">
      <p className="title">
        What <span id="brand-name">H.E.A.L.T.H</span> does for you?
      </p>
      <div className="for-you-content">
        <div className="left">
          <div className="left-title">
            <p className="individual">individual</p>
          </div>
          <div className="content">
            <div className="points">
              <div className="circle"><img src="" alt="indiv-care" srcset="" /></div><p>left-services</p>
            </div>
            <div className="points">
              <div className="circle"></div><p>left-services</p>
            </div>
            <div className="points">
              <div className="circle"></div><p>left-services</p>
            </div>
         </div>
        </div>
        <div className="right">
          <div className="content">
          <div className="points">
              <div className="circle"></div><p>right-services</p>
            </div>
            <div className="points">
              <div className="circle"></div><p>right-services</p>
            </div>
            <div className="points">
              <div className="circle"></div><p>right-services</p>
            </div>
          </div>
          <div className="right-title">
            <p className="healthcare-services">Healthcare Services</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
