const {NODE_ENV} = process.env as {NODE_ENV: string};
// 환경변수의 경우 반환값이 항상 string입니다.

const isPro = NODE_ENV === 'production';
const isDev = NODE_ENV === 'development';
const isTest = NODE_ENV === 'test';

export {isPro, isDev, isTest};
