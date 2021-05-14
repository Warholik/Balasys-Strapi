/* eslint-disable */
import React, {memo} from 'react';
import axios from "axios"
import {FormattedMessage} from 'react-intl';
import {get} from 'lodash';
import {auth} from 'strapi-helper-plugin';
import PageTitle from '../../components/PageTitle';
import {P, ALink} from './components';
import Button from '../../components/FullWidthButton';

const HomePage = () => {

  const token = CUSTOM_VARIABLES.token;
  const firstname = get(auth.getUserInfo(), 'firstname', '');
  //const lastname = get(auth.getUserInfo(), 'lastname', '');
  //const date = new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes();

  const ReleasePost = () => {
    axios.post('http://strapi_nginx/teamcity/ajax.html?add2Queue=BalaSysWebsite_Builds_WebsiteGenerationMaster&validate=true&redirectTo=asdasd',
      {},
      {
        headers: {
          Authorization: 'Bearer ' + token,
          'Access-Control-Allow-Origin': '*',
        }
      })
      .then(result => {
        if (result.status === 200) {
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
      })
      .catch(e => {
        strapi.notification.toggle({
          type: 'warning',
          message: "Sikertelen release.",
        });
      });
  }

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title}/>}
      </FormattedMessage>
      <div style={{display: "grid", gridTemplateColumns: "2fr 2fr 1fr", padding: "40px 40px 40px 40px", gap: "40px"}}>
        <div style={{
          justifySelf: "stretch",
          width: 100 + "%",
          padding: "20px 20px 20px 20px",
          boxShadow: "0 2px 4px 0 #e3e9f3",
          borderRadius: "3px",
          background: "white"
        }}>
          <h1>Szia {firstname}!</h1>
          <P style={{fontSize: 1.5 + "rem"}}>Ha tartalmat szeretnél módosítani, akkor minden oldalt és aloldalt
            megtalálsz a bal, görgethető/kereshető menüben.</P>
          <P style={{fontSize: 1.5 + "rem"}}>Képek és fájlok feltöltéséhez használd szintúgy a bal menüben található
            Media Library-t.</P>
          <div>
            <P style={{fontSize: 1.5 + "rem"}}>A markdown nyelvhez egy kis segítség:</P>
            <ALink
              rel="noopener noreferrer"
              style={{margin: 0, paddingLeft: 10}}
              href="https://www.markdownguide.org/cheat-sheet/"
              target="_blank"
            >
              Markdown Cheatsheet
            </ALink>
            <ALink
              rel="noopener noreferrer"
              style={{margin: 0, paddingLeft: 10}}
              href="https://www.tablesgenerator.com/markdown_tables"
              target="_blank"
            >
              Markdown Table Generator
            </ALink>
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
          <h1>Release build</h1>
          <P style={{fontSize: 1.5 + "rem"}}>A nagy zöld gombra kattintva, elkészül az aktuális állapotból egy
            production build és kikerül az élő weboldalra.</P>
          <P style={{fontSize: 1.5 + "rem", color: "red"}}>Figyelem! Release előtt mindig ellenőrizd a development
            oldalt és győződj meg arról, hogy minden OK.</P>
          <ALink
            rel="noopener noreferrer"
            style={{margin: 0, paddingLeft: 10}}
            href="http://10.90.31.67/"
            target="_blank"
          >
            Development oldal
          </ALink>
          <div style={{textAlign: "center"}}>
            <Button onClick={ReleasePost}>Release</Button>
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
          <h1 style={{margin: "0 0 20px 0"}}>Utolsó release:</h1>
          <h2>Mikor?</h2>
          <P>...</P>
          <h2>Ki által?</h2>
          <P>...</P>
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
