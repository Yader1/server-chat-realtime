const { comprobarJWT } = require('../helpers/jwt');
const { io } = require('../index');
const { usuarioConectado, usuarioDesconectado } = require('../controllers/socket');

//Mensajes de Sockets
io.on('connection', client => {
    const [valido, uid] = comprobarJWT(client.handshake.headers['x-token']);
    
    //Veficar autenticacion
    if(!valido){
        return client.disconnect();
    }

    //Cliente autenticado
    usuarioConectado( uid );

    //Ingresar al usuario a una sala en particular
    client.join(uid);

    //Escuchar del cliente mensaje-personal
    client.on('mensaje-personal', (payload) => {
        io.to(payload.para).emit('mensaje-personal', payload);
    });

    client.on('disconnect', () => {
        usuarioDesconectado( uid );
    });
});