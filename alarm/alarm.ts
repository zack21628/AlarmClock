import { Alarm } from "../models/alarm";
import { AlarmConfig } from "../models/alarm-config";

export function createAlarm(
  title: string,
  date: Date[],
  sound: boolean,
  vibrate: boolean,
  snooze: boolean,
  snoozeInterval: number,
  snoozeRepeat: number
): Alarm {
  const config = new AlarmConfig(
    sound,
    vibrate,
    snooze,
    snoozeInterval,
    snoozeRepeat
  );
  const alarm = new Alarm(date, title, config);
  return alarm;
}
