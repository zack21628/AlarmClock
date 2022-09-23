import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({config}: ConfigContext): ExpoConfig => ({
    ...config,
    name: 'AlarmClock',
    slug: 'AlarmClock',
});