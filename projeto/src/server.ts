import { http as server } from './http'
import './websocket/client'

server.listen(3333, ()=> console.info('server running in port 3333'))