import { bossChoices } from './static.js';
/**
 * Share command metadata from a common spot to be used for both runtime
 * and registration.
 */
export const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
};

export const SCHEDULE_BOSS_COMMAND = {
  name: 'schedule',
  description: 'Schedule a boss event at a certain time in the future',
  options: [
    {
      type: 3,
      name: 'boss',
      description: 'Boss name',
      required: true,
      choices: bossChoices,
    },
    {
      type: 3,
      name: 'date',
      description: 'Date to schedule the boss event',
      required: true,
    },
    {
      type: 3,
      name: 'time',
      description: 'Time to schedule the boss event',
      required: true,
    },
  ],
  type: 1,
};
