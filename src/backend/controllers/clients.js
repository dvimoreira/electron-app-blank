const getClients = ((req, res) => {
    let clients = [{ name: 'David', lastName: 'Moreira' }]
    res.json(clients)
})

module.exports = {
    getClients
}