/* eslint-disable */
import React, {memo} from 'react';
import {FormattedMessage} from 'react-intl';
import {get} from 'lodash';
import {auth} from 'strapi-helper-plugin';
import PageTitle from '../../components/PageTitle';
import {P, ALink} from './components';

const HomePage = () => {

  const firstname = get(auth.getUserInfo(), 'firstname', '');

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title}/>}
      </FormattedMessage>
      <div style={{display: "grid", gridTemplateColumns: "1fr 3fr 1fr", padding: "40px 40px 40px 40px", gap: "40px"}}>
        <div/>
        <div style={{
          justifySelf: "stretch",
          width: 100 + "%",
          padding: "20px 20px 20px 20px",
          boxShadow: "0 2px 4px 0 #e3e9f3",
          borderRadius: "3px",
          background: "white"
        }}>
          <h1>Szia {firstname}!</h1>
          <p style={{fontSize: 1.5 + "rem", width: "100%", marginTop: "20px"}}>Ha tartalmat szeretnél módosítani, akkor minden oldalt és aloldalt
            megtalálsz a bal, görgethető/kereshető menüben.</p>
          <p style={{fontSize: 1.5 + "rem"}}>Képek és fájlok feltöltéséhez használd szintúgy a bal menüben található
            Media Library-t.</p>
          <p style={{fontSize: 1.5 + "rem"}}>Ha publikálni szeretnéd a belső oldalt, akkor a pluginoknál teheted meg a Release pluginnal.</p>
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
        <div/>
      </div>
    </>
  );
};

export default memo(HomePage);
