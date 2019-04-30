<template>
  <div class="home">
    <div id="nav">
      <vs-tabs :color="colorx" vs-position="bottom" alignment="fixed">
        <vs-tab @click="colorx = 'rgb(16, 233, 179)'" label="Matches" vs-position="bottom">
          <div class="con-tab-ejemplo">
            <h3>Matches</h3>
            <!-- <div v-if="matches.length > 0">
              <vs-card actionable class="cardx" v-for="(index,match) in matches" :key ="match.Match_Id">
                <div slot="header">
                  <h3>{{match.Match_Id}}</h3>
                </div>
                <div slot="media">
                  <img :src="'./assests/logo.png'">
                </div>
                <div>
                  <span>{{match.Venue_Name}}</span>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="flex-end">
                    <vs-button color="primary" type="gradient">View</vs-button>
                    <vs-button color="danger" type="gradient">Delete</vs-button>
                  </vs-row>
                </div>
              </vs-card>
            </div>-->
          </div>
        </vs-tab>
        <vs-tab @click="colorx = 'rgb(16, 233, 179)'" label="Teams">
          <div class="con-tab-ejemplo">
            <div v-if="teams.length > 0">
              <vs-card actionable class="cardx" v-for="team in teams" :key="team.Match_Id">
                <div slot="header">
                  <h3>{{team.Team_Short_Code}}</h3>
                </div>
                <div slot="media">
                  <!-- <img :src="team.img" /> -->
                  <!-- <img :src="require(team.img)" > -->
                  <!-- <img src='../../assets/imgs/teams/rc-bangalore.jpg'> -->
                  <!-- <img :src="team.img" :alt='team.img' /> -->
                  <img v-bind:src="team.img">
                </div>
                <div>
                  <span>{{team.Team_Name}}</span>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="flex-end">
                    <!-- <vs-button color="primary" type="gradient">View</vs-button> -->
                  </vs-row>
                </div>
              </vs-card>
            </div>
          </div>
        </vs-tab>
        <vs-tab @click="colorx = 'rgb(16, 233, 179)'" label="Players">
          <div class="con-tab-ejemplo">
            <div>
              <vs-card class="cardx" fixedHeight v-for="player in players" :key="player.Player_Id">
                <div slot="header">
                  <vs-avatar  color="primary" size="large" :text="player.Player_Name"/>
                </div>
                <div slot="media">
                  <h3>{{player.Player_Name}}</h3>
                </div>
                <div>
                  <vs-row>
                    <i class="fas fa-calendar-week"></i>       <h4>{{player.DOB}}</h4>
                  </vs-row>
                  <vs-row>
                    <i class="fas fa-calendar-week"></i>       <h4>{{player.Batting_Hand}}</h4>
                  </vs-row>
                  <vs-row>
                    <i class="fas fa-calendar-week"></i>       <h4>{{player.Bowling_Skill}}</h4>
                  </vs-row>
                  <vs-row>
                    <i class="fas fa-globe"></i>       <h4>{{player.Country}}</h4>
                  </vs-row>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="flex-end">
                  </vs-row>
                </div>
              </vs-card>
            </div>
          </div>
        </vs-tab>
      </vs-tabs>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
// import * as csvFile from '../assets/csv/Player.csv';
import ballsResponse from "../../assets/json/ball_by_ball.json";
import matchesResponse from "../../assets/json/match.json";
import playerMatchesResponse from "../../assets/json/player_match.json";
import playersResponse from "../../assets/json/player.json";
import seasonsResponse from "../../assets/json/season.json";
import teamsResponse from "../../assets/json/team.json";
import teamImg from "../../assets/imgs/teams/rc-bangalore.jpg";

export default {
  name: "home",
  components: {},
  data() {
    return {
      colorx: "success",
      matches: [],
      players: [],
      teams: []
    };
  },
  methods: {
    readBallByBallInfo() {
      console.log("readBallByBallInfo is", ballsResponse.length);
    },
    readMatchesInfo() {
      console.log("readMatchesInfo is", matchesResponse.length);
      console.log("matches response: ", matchesResponse);
      let res = [];
      for (let index = 0; index < matchesResponse.length; index++) {
        res[index][img] = "../../assets/imgs/teams/rajasthan-royals.jpg";
        this.matches.push(matchesResponse[index]);
        this.matches[index].img =
          "../../assets/imgs/teams/rajasthan-royals.jpg";
        // console.log(JSON.stringify(this.matches[index]));
      }
      console.log("res is: " + res.length);
      console.log("res is: " + JSON.stringify(res));
      console.log(JSON.stringify(this.matches));
    },
    readPlayerMatchesInfo() {
      console.log("readPlayerMatchesInfo is", playerMatchesResponse.length);
    },
    readPlayersInfo() {
      console.log("readPlayersInfo is", playersResponse.length);
      for (let index = 0; index < playersResponse.length; index++) {
        this.players.push(playersResponse[index]);
      }
    },
    readSeasonsInfo() {
      console.log("readSeasonsInfo is", seasonsResponse.length);
    },
    readTeamsInfo() {
      console.log("readTeamsInfo is", teamsResponse.length);
      for (let index = 0; index < teamsResponse.length; index++) {
        switch (teamsResponse[index]["Team_Id"]) {
          case 1:
            teamsResponse[
              index
            ].img = require("../../assets/imgs/teams/kolkata-knight-riders.jpg");
            break;
          case 2:
            teamsResponse[
              index
            ].img = require("../../assets/imgs/teams/rc-bangalore.jpg");
            break;
          case 3:
            teamsResponse[
              index
            ].img = require("../../assets/imgs/teams/chennai-super-kings.jpg");
            break;
          case 4:
            teamsResponse[
              index
            ].img = require("../../assets/imgs/teams/kings-eleven-punjab.jpg");
            break;
          case 5:
            teamsResponse[
              index
            ].img = require("../../assets/imgs/teams/rajasthan-royals.jpg");
            break;
          case 6:
            teamsResponse[
              index
            ].img = require("../../assets/imgs/teams/delhi-capitals.jpg");
            break;
          case 7:
            teamsResponse[
              index
            ].img = require("../../assets/imgs/teams/mumbai-indians.jpg");
            break;
          case 8:
            teamsResponse[
              index
            ].img = require("../../assets/imgs/teams/deccan-chargers.jpg");
            break;
          case 9:
            teamsResponse[
              index
            ].img = require("../../assets/imgs/teams/kochi-tuskers-kerala.jpg");
            break;
          case 10:
            teamsResponse[
              index
            ].img = require("../../assets/imgs/teams/pune-warriors.jpg");
            break;
          case 11:
            teamsResponse[
              index
            ].img = require("../../assets/imgs/teams/sunrise-hyderabad.jpg");
            break;
          case 12:
            teamsResponse[
              index
            ].img = require("../../assets/imgs/teams/rising-pune-superstar.jpg");
            break;
          case 13:
            teamsResponse[
              index
            ].img = require("../../assets/imgs/teams/gujarat-lions.jpg");
            break;
        }
        this.teams.push(teamsResponse[index]);
      }
    },
  },
  beforeMount() {
    // this.readPlayersInfo();
    // this.readMatchesInfo();
    this.readTeamsInfo();
    this.readPlayersInfo();
  },
};
</script>

<style lang="scss">
</style>
