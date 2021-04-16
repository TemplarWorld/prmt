import actionsFunction from "./generated/TeamActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import TeamApi from "../../api/TeamApi";
 
 actionsFunction.loadTeamList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return TeamApi
     .getTeamList()
     .then(list => {
       dispatch(actionsFunction.loadTeamSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
