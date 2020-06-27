import {Command} from './command.model';

export interface ProjectApi {
  _id: string;
  project: string;
  script: [Command];
}
