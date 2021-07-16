import React, {memo} from "react";
import {Button, Text} from "@buffetjs/core";
import {request} from "strapi-helper-plugin";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/free-solid-svg-icons";
import pluginId from "../../pluginId";

import "./releaseplugin.css";

const HomePage = () => {

  const triggerPublish = async () => {
    const result = await request(`/${pluginId}/publish`, {method: "GET"});
    if (result.success === 200) {
      strapi.notification.toggle({
        type: 'success',
        message: "Sikeres release.",
      });
    } else {
      strapi.notification.toggle({
        type: 'warning',
        message: "Sikertelen release.",
      });
    }
  };

  const triggerPublishDev = async () => {
    const result = await request(`/${pluginId}/publishDev`, {method: "GET"});
    if (result.success === 200) {
      strapi.notification.toggle({
        type: 'success',
        message: "Sikeres release.",
      });
    } else {
      strapi.notification.toggle({
        type: 'warning',
        message: "Sikertelen release.",
      });
    }
  };

  const triggerPublishBlackowl = async () => {
    const result = await request(`/${pluginId}/publishBlackowl`, {method: "GET"});
    if (result.success === 200) {
      strapi.notification.toggle({
        type: 'success',
        message: "Sikeres release.",
      });
    } else {
      strapi.notification.toggle({
        type: 'warning',
        message: "Sikertelen release.",
      });
    }
  };

  const triggerPublishBlackowlDev = async () => {
    const result = await request(`/${pluginId}/publishBlackowlDev`, {method: "GET"});
    if (result.success === 200) {
      strapi.notification.toggle({
        type: 'success',
        message: "Sikeres release.",
      });
    } else {
      strapi.notification.toggle({
        type: 'warning',
        message: "Sikertelen release.",
      });
    }
  };

  return (
    <div className="release-wrapper">
      <h1 className="development-release"><span>Development</span> Release</h1>
      <div className="release-block">
        <div className="card-release">
          <h1>Balasys Website</h1>
          <Text style={{marginBottom: "10px"}}>A lenti gombra kattintva, újraindul a belső szerver és kikerülnek rá a frissített tartalmak.</Text>
          <div style={{textAlign: "center"}} className="dev-button">
            <Button
              icon={<FontAwesomeIcon icon={faUpload}/>}
              onClick={() => triggerPublishDev()}
            >
              Development
            </Button>
          </div>
        </div>
        <div className="card-release">
          <h1>Balasys Blackowl</h1>
          <Text style={{marginBottom: "10px"}}>A lenti gombra kattintva, újraindul a belső szerver és kikerülnek rá a frissített tartalmak.</Text>
          <div style={{textAlign: "center"}} className="dev-button2">
            <Button
              icon={<FontAwesomeIcon icon={faUpload}/>}
              onClick={() => triggerPublishBlackowlDev()}
            >
              Development
            </Button>
          </div>
        </div>
      </div>
      <h1 className="live-release"><span>Live</span> Release</h1>
      <div className="release-block">
        <div className="card-release">
          <h1>Balasys Website</h1>
          <Text style={{marginBottom: "10px"}}>A lenti gombra kattintva, elkészül az aktuális állapotból egy
            production build és kikerül az élő weboldalra.</Text>
          <Text style={{color: "red", marginBottom: "20px"}}>Figyelem! Release előtt mindig ellenőrizd a development
            oldalt és győződj meg arról, hogy minden OK.</Text>
          <div style={{textAlign: "center"}}>
            <Button
              color="success"
              icon={<FontAwesomeIcon icon={faUpload}/>}
              onClick={() => triggerPublish()}
            >
              Balasys.hu Release
            </Button>
          </div>
        </div>
        <div className="card-release">
          <h1>Balasys Blackowl</h1>
          <Text style={{marginBottom: "10px"}}>A lenti gombra kattintva, elkészül az aktuális állapotból egy
            production build és kikerül az élő weboldalra.</Text>
          <Text style={{color: "red", marginBottom: "20px"}}>Figyelem! Release előtt mindig ellenőrizd a development
            oldalt és győződj meg arról, hogy minden OK.</Text>
          <div style={{textAlign: "center"}}>
            <Button
              color="primary"
              icon={<FontAwesomeIcon icon={faUpload}/>}
              onClick={() => triggerPublishBlackowl()}
            >
              Blackowl Release
            </Button>
          </div>
        </div>
      </div>
      <h1 className="live-release">Állapot</h1>
      <div className="release-block">
        <div className="card-release">
          <h1>Balasys Website</h1>
          <h2>Teszt szerver:</h2>
          <img
            src="https://teamcity.balasys/app/rest/builds/buildType:BalaSysWebsite_Builds_WebsiteGeneration_Develop/statusIcon"
            alt="teszt" className="build-state"/>
          <h2>Élő site:</h2>
          <img
            src="https://teamcity.balasys/app/rest/builds/buildType:BalaSysWebsite_Builds_WebsiteGenerationMaster/statusIcon"
            alt="balasys.hu" className="build-state"/>
        </div>
        <div className="card-release">
          <h1>Balasys Blackowl</h1>
          <h2>Teszt szerver:</h2>
          <img
            src="https://teamcity.balasys/app/rest/builds/buildType:BalaSysWebsite_Builds_WebsiteGeneration_Develop/statusIcon"
            alt="teszt" className="build-state"/>
          <h2>Élő site:</h2>
          <img
            src="https://teamcity.balasys/app/rest/builds/buildType:BalaSysWebsite_Builds_WebsiteGenerationMaster/statusIcon"
            alt="balasys.hu" className="build-state"/>
        </div>
      </div>
    </div>
  );
};

export default memo(HomePage);