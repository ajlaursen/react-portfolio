import React from "react";
import alex from "../../Images/alex.jpg";

const Lorem = () => {
  return (
    <div className="container mx-auto">
      <div className="flex md:flex-row flex-col content-center items-center shadow-2xl rounded-lg border-2 mb-16">
        <div className="flex-1">
          <img
            src={alex}
            alt="alex and sophie in front of broken down snowplow black"
          />
        </div>
        <div className="text-grey-700 p-4 flex-1 ">
          Hello my name is Alex Laursen. I am a budding software developer! My
          experience bridges many professional fields from Zamboni operator to
          being the mechanic for some of the most elite level cyclists in the
          world. These experiences have led to a high attention to detail and
          desire for creating efficient and repeatable process. Currently I am
          pursing a Certificate in Full Stack Web Development from the
          University of Utah.
          <br />
          <br />
          <b>Technical Skills:</b> React, Javascript, Jquery, HTML, CSS,
          Bootstrap, Mongo, Mongoose, MySql, Sequelize, Handlebars, Python
          <br />
          <br />
          Things I enjoy outside of the professional realm vary greatly. I enjoy
          playing tabletop games and RPG's. Mountain biking, whitewater
          kayaking, and rock climbing are also passions of mine! I have been
          racing and riding mountain bikes since I was sixteen. The Contra Dance
          community also brings me great joy.
        </div>
      </div>
    </div>
  );
};
export default Lorem;