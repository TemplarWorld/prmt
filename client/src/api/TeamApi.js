import TeamApiGenerated from "./generated/TeamApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class TeamApi extends TeamApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Team List
  static getTeamList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/teams")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default TeamApi;