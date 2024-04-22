import "./ExploreSection.css";

const ExploreSection = () => {
   return (
      <section id="section">
         <div className="title-container">
            <div className="title">
               Explore Our Services
            </div>
         </div>
         <div className="content-container">
            <div className="content">
               <ol>
                  <li><b>Comprehensive Solutions:</b> Tailored services addressing individual health goals and healthcare needs.</li>
                  <li><b>Personalized Guidance:</b>  Access to expert advice and support for your wellness journey.</li>
                  <li><b>Specialized Programs:</b>  Designed to enhance physical, mental, and emotional well-being.</li>
                  <li><b>Cutting-Edge Technology:</b> Utilizing innovative tools to optimize health outcomes.</li>
                  <li><b>Collaborative Care:</b> Team-based approach fostering communication and coordination.</li>
                  <li><b>Ongoing Support:</b> Continuous assistance to ensure sustainable health and lifestyle changes.</li>
               </ol>
            </div>
         </div>
      </section>
   )
}

export default ExploreSection;