import button from './button/config'
import fronHub from './Fronthub/config'
import bizone from './BiZone/config'
import accordion from './Accrodion/config'
import todo from './ToDoList/config'

export interface IChallengeConfig {
  name: string;
  instructions?: string;
  reference?: string;
  asserts?: string[];
}

export const challengesConfig: IChallengeConfig[] = [
  button,
  fronHub,
  bizone,
  accordion,
  todo
];
