'use strict';

const axios = require("axios");

module.exports = {

  publish: async (ctx) => {
    const token = process.env.BEARER_TOKEN;
    let success;

    const result = await axios({
      method: 'post',
      url: 'http://strapi_nginx/teamcity/ajax.html?add2Queue=BalaSysWebsite_Builds_WebsiteGenerationMaster&validate=true&redirectTo=asdasd',
      headers: {
        Authorization: "Bearer " + token
      }
    }).then(function (response) {
      success = response.status;
    });

    ctx.send({success});
  },

  publishBlackowl: async (ctx) => {
    const token = process.env.BEARER_TOKEN;
    let success;

    const result = await axios({
      method: 'post',
      url: 'http://strapi_nginx/teamcity/ajax.html?add2Queue=BalaSysWebsite_Builds_WebsiteGenerationMaster&validate=true&redirectTo=asdasd',
      headers: {
        Authorization: "Bearer " + token
      }
    }).then(function (response) {
      success = response.status;
    });

    ctx.send({success});
  },
};
