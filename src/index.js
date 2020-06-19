const app = require('./app')

async function Main () {
     await app.listen(app.get('port'), () => {
        console.log(app.get('port'));
    })

}
Main();