// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import TeamModel from "../models/Prmt_db/TeamModel";
import UserModel from "../models/Prmt_db/UserModel";
import ProjectsModel from "../models/Prmt_db/ProjectsModel";
import RolesModel from "../models/Prmt_db/RolesModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.prmt_db_dbUrl);

    // Start Init Models

		TeamModel.init();
		UserModel.init();
		ProjectsModel.init();
		RolesModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_prmt_db = await mongoose.connect(
        "mongodb://" + properties.prmt_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_prmt_db;
  }
}

export default new Database();
