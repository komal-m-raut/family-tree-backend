import neo4j from 'neo4j-driver';
import config from './config';

const driver = neo4j.driver(
  config.neo4j.uri,
  neo4j.auth.basic(config.neo4j.user, config.neo4j.password)
);

export default driver;
