

const notFound =  (res, req) => {
    res.status(404).send("Page does not exist")
}

module.exports = notFound 