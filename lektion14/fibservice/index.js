import Hapi from '@hapi/hapi'
import Fibonacci from 'fibonacci'

const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    })

    server.route({
        method: 'GET',
        path: '/api/fibonacci/{iterations}',
        handler: (request, h) => {
            const iterations = parseInt(request.params.iterations)
            if (isNaN(iterations) || iterations > 5000) {
                const error = { error: 'Bad Input' }
                return h.response(error).code(400)
            }
            return Fibonacci.iterate(iterations)
        }
    })

    await server.start()
    console.log('Server running on %s', server.info.uri)
}
init()
