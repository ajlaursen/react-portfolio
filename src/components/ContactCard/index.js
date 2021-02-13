import React from "react";
import Alex from "../../assets/Images/alex-headshot.jpeg";

const ContactCard = () => {
  return (
    <div className="flex items-center justify-center mt-14">
      <div className="rounded rounded-t-lg overflow-hidden shadow-xl max-w-xs my-3">
        <div className="flex justify-center -mt-8">
          <img
            src={Alex}
            className="rounded-xl border-solid border-white border-2 "
            alt="Alex Headshot"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-gray-900 ">Alex Laursen</h3>
          <p className="mt-2 text-grey-700">Contact</p>
          <p>
            <br />
            Email:{" "}
            <a
              href="mailto: contact@ajlaursen.codes"
              className="underline text-gray-600"
            >
              contact@ajlaursen.codes
            </a>
            <br />
            Phone: 863.899.3214
            <br />
            Ann Arbor, MI 48108, United States
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
