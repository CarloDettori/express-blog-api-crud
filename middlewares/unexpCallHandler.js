function unexpHand(req, res, next) {
    res.status(404).json({
        success: false, error: "not found", message: "404 - not found"
    })
    next();
}

module.exports = unexpHand;