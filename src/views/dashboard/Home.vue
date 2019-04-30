<template>
  <div class='home'>
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
            </div> -->
          </div>
        </vs-tab>
        <vs-tab @click="colorx = 'rgb(16, 233, 179)'" label="Teams" >
          <div class="con-tab-ejemplo">
            <div v-if="teams.length > 0">
              <vs-card actionable class="cardx" v-for="team in teams" :key ="team.Match_Id">
                <div slot="header">
                  <h3>{{team.Team_Short_Code}}</h3>
                </div>
                <div slot="media">
                  <img alt="Vue logo" src="../../assets/logo.png">
                </div>
                <div>
                  <span>Hi {{team.Team_Name}}</span>
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
            <h3>Players</h3>
          </div>
        </vs-tab>
      </vs-tabs>
    </div>
  </div>
</template>

<script>
// import * as csvFile from '../assets/csv/Player.csv';
import * as ballsResponse from '../../assets/json/ball_by_ball.json';
import matchesResponse from '../../assets/json/match.json';
import * as playerMatchesResponse from '../../assets/json/player_match.json';
import * as playersResponse from '../../assets/json/player.json';
import * as seasonsResponse from '../../assets/json/season.json';
import teamsResponse from '../../assets/json/team.json';

export default {
  name: 'home',
  components: {},
  data() {
    return {
      colorx: 'success',
      matches:[],
      players:[],
      teams:[],
    };
  },
  methods: {
    readBallByBallInfo() {
      console.log('readBallByBallInfo is',ballsResponse.length);
    },
    readMatchesInfo() {
      console.log('readMatchesInfo is',matchesResponse.length);
      console.log('matches response: ', matchesResponse);
      for(let index = 0; index<matchesResponse.length; index++){
        console.log(JSON.stringify(matchesResponse[index]));
        this.matches.push(matchesResponse[index]);
        console.log(JSON.stringify(this.matches[index]));
      }
    },
    readPlayerMatchesInfo() {
      console.log('readPlayerMatchesInfo is',playerMatchesResponse.length);
    },
    readPlayersInfo() {
      console.log('readPlayersInfo is',playersResponse.length);
    },
    readSeasonsInfo() {
      console.log('readSeasonsInfo is',seasonsResponse.length);
    },
    readTeamsInfo() {
      console.log('readTeamsInfo is',teamsResponse.length);
      for(let index = 0; index<teamsResponse.length; index++){
        console.log(JSON.stringify(teamsResponse[index]));
        this.teams.push(teamsResponse[index]);
        console.log(JSON.stringify(this.teams[index]));
      }
    },
  },
  beforeMount() {
    // this.readPlayersInfo();
    // this.readMatchesInfo();
    this.readTeamsInfo();
  },
};
</script>
