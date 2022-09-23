export class AlarmConfig {
  constructor(
    sound: boolean = true,
    vibrate: boolean = true,
    snooze: boolean = true,
    snoozeInterval: number = 5,
    snoozeRepeat: number = 3
  ) {
    this.sound = sound;
    this.vibrate = vibrate;
    this.snooze = snooze;
    this.snoozeInterval = snoozeInterval;
    this.snoozeRepeat = snoozeRepeat;
  }

  sound: boolean;
  vibrate: boolean;
  snooze: boolean;
  snoozeInterval: number;
  snoozeRepeat: number;
}
