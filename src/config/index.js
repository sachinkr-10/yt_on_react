


if(process.env.NODE === 'production'){
    import config_prod from './config_prod;'
    export default config_prod
}else{
    import config_dev from './config_dev';
    export default config_dev;
}