import React from "react";
import AccItem from "./AccItem";

const FAQ = () => {
  return (
    <div className="faq ">
      <div id="faq" className="container">
        <h1>Frequently Asked Questions</h1>
        <div className="questions">
          <AccItem
            question="What services do you offer?"
            answer="I create responsive websites, landing pages, UI components, and web apps. I also improve existing designs and optimize performance."
          />
          <AccItem
            question="What technologies do you work with?"
            answer="I mainly work with HTML, CSS, JavaScript, React, and modern tools like Git and APIs."
          />
          <AccItem
            question="Are you available for freelance or remote work?"
            answer="Yes, I’m open to freelance projects and remote opportunities."
          />
          <AccItem
            question="How much experience do you have?"
            answer="I have 1 year of hands-on experience in front-end development, building modern, responsive websites  using React and JavaScript."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
