function apiKey(req, res, next) {

    const apiKey = '12345'
    const useKey = req.query.key;
    if (useKey && (useKey === apiKey)) {

        next();
    } else {
        res.status(401).json({
            message: 'Unauthorized'
        });

    }
}

module.exports = apiKey;