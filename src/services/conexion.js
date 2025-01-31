import pg from 'pg';
const {Client}=pg;

const config={
    user:'db_petmarq_user',
    host: 'dpg-cueahr1opnds738eudf0-a.oregon-postgres.render.com',
    database: 'db_petmarq',
    password: 'IGtHWoDAuPB53UD9O7yuPSOg0wyaEI1f',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    }
}

export async function Conectar(params){
    const client= new Client(config);
    try{
        await client.connect();
        console.log('Conexión exitosa');
    }catch(error){
        console.log('Error en la conexión');
    }
}

export async function ConsultarProductos() {
    const client = new Client(config);
    try {
        await client.connect();
        const result = await client.query('SELECT * FROM productos');
        return result.rows;
    } catch (error) {
        console.log('Error en la conexión');
    }
}