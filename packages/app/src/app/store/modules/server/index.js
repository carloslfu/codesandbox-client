import { Module } from 'cerebral';
import model from './model';
import * as sequences from './sequences';

export default Module({
  model,
  state: {
    status: 'initializing',
    containerStatus: 'initializing',
  },
  signals: {
    restartSandbox: sequences.restartSandbox,
    restartContainer: sequences.restartContainer,
    statusChanged: sequences.setStatus,
    containerStatusChanged: sequences.setContainerStatus,
    onSSEMessage: sequences.onSSEMessage,
  },
});
