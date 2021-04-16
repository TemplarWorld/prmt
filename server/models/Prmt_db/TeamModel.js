import TeamModelGenerated from "./generated/TeamModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = TeamModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await TeamModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TeamModelGenerated,
  ...customModel
};
