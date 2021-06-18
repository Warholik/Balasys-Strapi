import React, {memo} from "react";
import {Button, Text} from "@buffetjs/core";
import {request} from "strapi-helper-plugin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import pluginId from "../../pluginId";

const HomePage = () => {

  const triggerPublish = async () => {
    const result = await request(`/${pluginId}/publish`, {method: "GET"});
    if(result.success === 200){
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
    <>
      <div style={{display: "grid", gridTemplateColumns: "1fr 4fr 4fr 1fr", padding: "40px 40px 40px 40px", gap: "40px"}}>
        <div/>
        <div style={{
          justifySelf: "stretch",
          width: 100 + "%",
          padding: "20px 20px 20px 20px",
          boxShadow: "0 2px 4px 0 #e3e9f3",
          borderRadius: "3px",
          background: "white"
        }}>
          <h1 style={{marginBottom: "20px"}}>Release Plugin</h1>
          <Text style={{fontSize: 1.5 + "rem", marginBottom: "10px"}}>A lenti gombra kattintva, elkészül az aktuális állapotból egy
            production build és kikerül az élő weboldalra.</Text>
          <Text style={{fontSize: 1.5 + "rem", color: "red", marginBottom: "20px"}}>Figyelem! Release előtt mindig ellenőrizd a development
            oldalt és győződj meg arról, hogy minden OK.</Text>
          <div style={{textAlign: "center"}}>
            <Button
              color="success"
              icon={<FontAwesomeIcon icon={faUpload} />}
              onClick={() => triggerPublish()}
            >
              Release
            </Button>
          </div>
        </div>
        <div style={{
          justifySelf: "stretch",
          width: 100 + "%",
          padding: "20px 20px 20px 20px",
          boxShadow: "0 2px 4px 0 #e3e9f3",
          borderRadius: "3px",
          background: "white"
        }}>
          <h1 style={{margin: "0 0 20px 0"}}>Release állapot:</h1>
          <h2>Teszt szerver:</h2>
          <img src="https://teamcity.balasys/app/rest/builds/buildType:BalaSysWebsite_Builds_WebsiteGeneration_Develop/statusIcon" alt="teszt" style={{width: "106px", height: "20px"}} />
          <h2>Élő site:</h2>
          <img src="https://teamcity.balasys/app/rest/builds/buildType:BalaSysWebsite_Builds_WebsiteGenerationMaster/statusIcon" alt="balasys.hu" style={{width: "106px", height: "20px"}} />
        </div>
        <div/>
      </div>
    </>
  );
};

export default memo(HomePage);