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
                  <!-- <img :src="team.img" /> -->
                  <img src='team.img' />
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

        switch(matchesResponse[index][Match_Id]){
          case 1: matchesResponse[index]['img'] = '../../assets/imgs/teams/kolkata-knight-riders.jpg';
          break;
          case 2: matchesResponse[index]['img'] = '../../assets/imgs/teams/rc-bangalore.jpg';
          break;
          case 3: matchesResponse[index]['img'] = '../../assets/imgs/teams/chennai-super-kings.jpg';
          break;
          case 4: matchesResponse[index]['img'] = '../../assets/imgs/teams/kings-eleven-punjab.jpg';
          break;
          case 5: matchesResponse[index]['img'] = '../../assets/imgs/teams/rajasthan-royals.jpg';
          break;
          case 6: matchesResponse[index]['img'] = '../../assets/imgs/teams/delhi-capitals.jpg';
          break;
          case 7: matchesResponse[index]['img'] = '../../assets/imgs/teams/mumbai-indians.jpg';
          break;
          case 8: matchesResponse[index]['img'] = '../../assets/imgs/teams/rajasthan-royals.jpg';
          break;
          case 9: matchesResponse[index]['img'] = '../../assets/imgs/teams/rajasthan-royals.jpg';
          break;
          case 10: matchesResponse[index]['img'] = '../../assets/imgs/teams/rajasthan-royals.jpg';
          break;
          case 11: matchesResponse[index]['img'] = '../../assets/imgs/teams/rajasthan-royals.jpg';
          break;
          case 12: matchesResponse[index]['img'] = '../../assets/imgs/teams/rajasthan-royals.jpg';
          break;
          case 13: matchesResponse[index].img = '../../assets/imgs/teams/rajasthan-royals.jpg';
          break;
        }
        this.matches.push(matchesResponse[index]);
        this.matches[index].img = '../../assets/imgs/teams/rajasthan-royals.jpg';
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
