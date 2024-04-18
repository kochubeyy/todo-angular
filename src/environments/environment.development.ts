export interface EnvironmentConfig {
  production: boolean;
  api: string;
}

export const environment: EnvironmentConfig = {
  production: true,
  api: 'http://localhost:24589',
};
