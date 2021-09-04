const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const db = require('./config/db');

const app = express();

const path = require('path');

require('dotenv').config({
    path: './.env'
});

app.use(bodyParser.json({
    limit: '10000mb'
}));

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '10000mb'
}));

app.use(cors());

/**
* Router Import
*/

const contryRouter = require('./routes/contry');

const regionRouter = require('./routes/region');

const departementRouter = require('./routes/departement');

const communeRouter = require('./routes/commune');

const villageRouter = require('./routes/village');

const concessionRouter = require('./routes/concession');

const groupementRouter = require('./routes/groupement');

const membreRouter = require('./routes/membre');

const agricultureRouter = require('./routes/agriculture');

const cultureRouter = require('./routes/culture');

const chargeRouter = require('./routes/charge');

const intratRouter = require('./routes/intrat');

const equipementRouter = require('./routes/equipement');

const especeRouter = require('./routes/espece');

const operateurStockerRouter = require('./routes/operateur-stocker');

const recolteRouter = require('./routes/recolter-champs');

const commercialisationRouter = require('./routes/commercialistaion');

const structureFinanciereRouter = require('./routes/structure-financiere');

const pretRouter = require('./routes/pret');

const authRouter = require('./routes/auth');

const authMiddleweare = require('./middlewares/auth');

/**
 * Execution Router 
 */

app.use('/api/contry',  contryRouter);

app.use('/api/region', regionRouter);

app.use('/api/departement', departementRouter);

app.use('/api/commune', communeRouter);

app.use('/api/village', villageRouter);

app.use('/api/concession', concessionRouter);

app.use('/api/groupement', authMiddleweare ,groupementRouter);

app.use('/api/membre', membreRouter);

app.use('/api/agriculture', agricultureRouter);

app.use('/api/culture', cultureRouter);

app.use('/api/charge', chargeRouter);

app.use('/api/intrat', intratRouter);

app.use('/api/equipement', equipementRouter);

app.use('/api/espece', especeRouter);

app.use('/api/operateur-stocker', operateurStockerRouter);

app.use('/api/recolte-champs', recolteRouter);

app.use('/api/commercialisation', commercialisationRouter);

app.use('/api/structure-financiere', structureFinanciereRouter);

app.use('/api/pret', pretRouter);

app.use('/api/auth', authRouter);

app.use('/static', express.static(path.join('.', 'files')));

db.sync({
    // force: true
}).then(_ => {
    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`Server started on ${port}`);
    });
})