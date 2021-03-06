import React from 'react';
import Gravatar from "../gravatar";
import MyBoards from "./my-boards";

const baseUrl = `${window.location.origin}${drupalSettings.path.baseUrl}`;
const drupalUser = drupalSettings.user;

const UserProfile = () => (
  <div className="columns">
    <div className="column is-half is-offset-one-quarter">
      <div className="box">
        <section className="media">
          <div className="media-left">
            <Gravatar md5={drupalUser.gravatar} name={drupalUser.email}/>
          </div>
          <div className="media-content">
            <div className="content">
              <h1>{drupalUser.email}</h1>
              <nav className="level is-mobile">
                <div className="level-left">
                  <div className="level-item">
                    <a href={`${baseUrl}user/${drupalUser.uid}/edit`}>Edit</a>
                  </div>
                  <div className="level-item">
                    <a href={`${baseUrl}user/${drupalUser.uid}/issues`}>My issues</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </div>
      <MyBoards uid={drupalUser.uid}/>
    </div>
  </div>
)
export default UserProfile;
