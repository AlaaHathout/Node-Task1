import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
app.listen(5000);

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

const students = ['Alaa', 'Aya', 'Esraa', 'Alaa Adel', 'Adel'];

/*let answer = '<ul>';
for(let i=0; i<students.length; i++){
    answer += '<li>' + students[i] + '</li>';
}
answer += '</ul>';*/

app.get('/students', (request, response) => {
  //  response.send(answer);
  response.render('mytest', {layout: false, students});
});