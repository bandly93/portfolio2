import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { handleRender } from './render.js'
import expressStaticGzip from 'express-static-gzip';

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(expressStaticGzip('dist',{enableBrotli:true}));
app.use(handleRender);

app.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
});

