import dotenv from "dotenv";
import Joi from "joi";

// Load environment variables from .env file
dotenv.config();

// Define a schema to validate environment variables
const envSchema = Joi.object({
    NEO4J_URI: Joi.string().uri().required().description('The URI of the Neo4j database'),
    NEO4J_USER: Joi.string().required().description('The username for the Neo4j database'),
    NEO4J_PASSWORD: Joi.string().required().description('The password for the Neo4j database'),
  }).unknown();

// Validate the environment variables
const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// Export the validated configuration
const config = {
  neo4j: {
    uri: envVars.NEO4J_URI,
    user: envVars.NEO4J_USER,
    password: envVars.NEO4J_PASSWORD,
  },
};

export default config;
