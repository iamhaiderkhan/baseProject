/**
 *  @file This file starts the service
 */

import * as dotenv from 'dotenv'
dotenv.config() // use here as atlas fails otherwise with missing env variables

import { Lib, logger as Logger, Logging } from 'onebyte_utils'
import { initService } from './app'
const loggingOptions: Logging.InputDecorators = {
  component: 'Service:Index',
}
const logger: Logging.Logger = new Logger('baseproject-service', loggingOptions)

const config: Lib.Config = {
  database: true,
  name: 'baseproject-service',
  service_root_uri: '',
}

initService(config)
.then(() => {
  logger.info('Running server')
})
.catch((err: Error) => {
  logger.error(err)
  process.exit(1)
})
